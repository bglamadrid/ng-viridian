import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceFiltersPanelComponent } from './device-filters-panel.component';

describe('DeviceFiltersPanelComponent', () => {
  let component: DeviceFiltersPanelComponent;
  let fixture: ComponentFixture<DeviceFiltersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceFiltersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
