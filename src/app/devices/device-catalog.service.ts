import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CommonInMemoryService } from 'src/app/services/in-memory/common.in-memory.service';
import { DeviceCrudInMemoryService } from 'src/app/services/in-memory/crud/device.crud.in-memory.service';
import { Descriptable } from 'src/models/Descriptable';
import { Device } from 'src/models/entities/Device';
import { DeviceFilters } from './DeviceFilters';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DeviceDialogComponent } from 'src/app/devices/dialog/device-dialog.component';
import { DeviceDialogData } from 'src/app/devices/dialog/DeviceDialogData';

@Injectable()
export class DeviceCatalogService
  implements OnDestroy {

  protected devicesArray: Device[];
  public devicesSource: Subject<Device[]>;
  public filters: Partial<DeviceFilters>;

  public get devices(): Device[] {
    return this.devicesArray;
  }
  public set devices(devices: Device[]) {
    this.devicesArray = devices;
    this.devicesSource.next(devices);
  }

  public get deviceTypes$(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceTypes();
  }

  public get deviceBrands$(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceBrands();
  }

  constructor(
    protected data: DeviceCrudInMemoryService,
    protected commonData: CommonInMemoryService,
    protected dialogs: MatDialog
  ) {
    this.devicesArray = [];
    this.devicesSource = new BehaviorSubject(this.devicesArray);
    this.filters = {};
  }

  ngOnDestroy(): void {
    this.devicesSource.complete();
  }

  public reloadDevices(): void {

    const noFilters: boolean = (JSON.stringify(this.filters) === '{}');
    const query: Observable<Device[]> = noFilters ? this.data.readAll() : this.data.readFiltered(this.filters);

    query.pipe(
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

  public openDeviceDialogFor(dvc: Device): Observable<Device> {
    const dialogData: DeviceDialogData = {
      svc: this,
      device: dvc ? dvc : null
    };
    const dialog = this.dialogs.open(
      DeviceDialogComponent,
      {
        panelClass: 'with-actions',
        width: '30rem',
        height: '70vh',
        data: dialogData
      }
    );

    return dialog.afterClosed();
  }

  public insertDevice(dvc: Device): Observable<Device> {
    return this.data.create(dvc);
  }
  public updateDevice(dvc: Device): Observable<Device> {
    return this.data.update(dvc, dvc.id);
  }
}
