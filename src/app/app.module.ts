import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//image cropper
import { ImageCropperModule } from 'ngx-image-cropper';
import {AutoSizeInputModule} from 'ngx-autosize-input';
//material design
import {MaterialDesign} from './material/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogGalleryComponent } from './dialog-gallery/dialog-gallery.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogGalleryComponent
  ],
  entryComponents:[DialogGalleryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    ImageCropperModule,
    AutoSizeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
