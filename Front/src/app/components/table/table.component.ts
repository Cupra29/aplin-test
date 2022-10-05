import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'table-component',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'sku', 'cant'];
  apiDataSource!: ApiDataSource | null;
  data: ApiResponse[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.apiDataSource = new ApiDataSource(this._httpClient);

    this.apiDataSource!.getData().subscribe((data) => {
      console.log(data);
      // Flip flag to show that loading has finished.
      this.isLoadingResults = false;
      this.isRateLimitReached = data === null;

      if (data === null) {
        return [];
      }
      this.data = data;
      return data;
    });
  }
}

export interface ApiResponse {
  cant: number;
  id: number;
  sku: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ApiDataSource {
  constructor(private _httpClient: HttpClient) {}

  getData(): Observable<ApiResponse[]> {
    const href = 'http://localhost:3000/api/downloadOrders';

    return this._httpClient.get<ApiResponse[]>(href);
  }
}
