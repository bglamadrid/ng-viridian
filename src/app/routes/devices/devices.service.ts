import { Injectable, OnDestroy, Inject } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { DeviceFilters } from './DeviceFilters';
import { Descriptable } from 'src/data/models/Descriptable';
import { SERVICE_ALIASES } from 'src/data/services/service-aliases';
import { DataService } from 'src/data/services/data.service.interface';
import { CommonDataService } from 'src/data/services/common-data.service.interface';
import { MatDialog } from '@angular/material';
import { catchError, retry } from 'rxjs/operators';
import { DeviceDialogData } from './dialog/DeviceDialogData';
import { DeviceDialogComponent } from './dialog/device-dialog.component';


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
