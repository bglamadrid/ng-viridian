import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceCatalogComponent } from './device-catalog.component';

describe('DeviceCatalogComponent', () => {
  let component: DeviceCatalogComponent;
  let fixture: ComponentFixture<DeviceCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
