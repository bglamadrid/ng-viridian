import { Injectable, OnDestroy, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DeviceDialogComponent } from 'src/app/devices/dialog/device-dialog.component';
import { DeviceDialogData } from 'src/app/devices/dialog/DeviceDialogData';
import { Descriptable } from 'src/models/Descriptable';
import { Device } from 'src/models/entities/Device';
import { CommonDataService } from 'src/data/common-data.service.interface';
import { DeviceFilters } from './DeviceFilters';
import { SERVICE_ALIASES } from 'src/data/service-aliases';
import { DataService } from 'src/data/data.service.interface';

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
    return this.commonData.deviceTypes$;
  }

  public get deviceBrands$(): Observable<Descriptable[]> {
    return this.commonData.deviceBrands$;
  }

  constructor(
    @Inject(SERVICE_ALIASES.devices) protected data: DataService<Device>,
    @Inject(SERVICE_ALIASES.common) protected commonData: CommonDataService,
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
