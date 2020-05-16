import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGalleryComponent } from './dialog-gallery.component';

describe('DialogGalleryComponent', () => {
  let component: DialogGalleryComponent;
  let fixture: ComponentFixture<DialogGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
