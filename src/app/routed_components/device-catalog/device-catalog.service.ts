import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonInMemoryService } from 'src/app/services/in-memory/common.in-memory.service';
import { DeviceCrudInMemoryService } from 'src/app/services/in-memory/crud/device.crud.in-memory.service';
import { Descriptable } from 'src/models/Descriptable';
import { Device } from 'src/models/entities/Device';

@Injectable()
export class DeviceCatalogService
  implements OnDestroy {

  protected devicesArray: Device[];
  protected deviceFilters: Device;
  public devicesSource: Subject<Device[]>;

  public get devices(): Device[] {
    return this.devicesArray;
  }
  public set devices(devices: Device[]) {
    this.devicesArray = devices;
    this.devicesSource.next(devices);
  }

  public get filters(): Device {
    return this.deviceFilters;
  }
  public set filters(dvc: Device) {
    this.deviceFilters = dvc;

  }

  public get deviceTypes(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceTypes();
  }

  public get deviceBrands(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceBrands();
  }

  constructor(
    protected data: DeviceCrudInMemoryService,
    protected commonData: CommonInMemoryService
  ) {
    this.devicesArray = [];
    this.devicesSource = new BehaviorSubject(this.devicesArray);
  }

  ngOnDestroy(): void {
    this.devicesSource.complete();
  }

  public reloadDevices(): void {
    this.data.readAll()
    .pipe(
      catchError(err => []),
      retry(1)
    ).subscribe(
      (items: Device[]) => {
        if (items) {
          this.devices = items;
        }
      }
    );
  }
}
