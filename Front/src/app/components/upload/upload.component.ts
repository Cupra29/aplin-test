import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  uploadedFiles!: Array<File>;
  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  onUpload() {
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append(
        'uploads[]',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }
    this.uploadService
      .uploadFile(formData)
      .subscribe((res) => console.log('Response:', res));
  }
  onFileChange(e: any) {
    this.uploadedFiles = e.target.files;
  }
}
