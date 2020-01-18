import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFiltersCardComponent } from './device-filters-card.component';

describe('DeviceFiltersCardComponent', () => {
  let component: DeviceFiltersCardComponent;
  let fixture: ComponentFixture<DeviceFiltersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFiltersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFiltersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
