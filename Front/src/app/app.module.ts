import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { UploadComponent } from './components/upload/upload.component';
import { UploadService } from './services/upload.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [AppComponent, UploadComponent, TableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
