import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailsCardComponent } from './device-details-card.component';

describe('DeviceDetailsCardComponent', () => {
  let component: DeviceDetailsCardComponent;
  let fixture: ComponentFixture<DeviceDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
