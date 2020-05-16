import { Component, OnInit, Inject } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-dialog-gallery',
  templateUrl: './dialog-gallery.component.html',
  styleUrls: ['./dialog-gallery.component.scss']
})
export class DialogGalleryComponent implements OnInit {
  rasio:any;
  constructor(
    public dialogRef: MatDialogRef<DialogGalleryComponent>,  
    @Inject(MAT_DIALOG_DATA) public sourceData: any
  ) {
    this.rasio=sourceData.rasio;
   }
  

  ngOnInit() {
    
  }
  imageChangedEvent: any = '';
    croppedImage: any = '';    
    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
  loading:boolean; 
  unggahGambar()
  {   
      this.dialogRef.close(this.croppedImage); 
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }


}
