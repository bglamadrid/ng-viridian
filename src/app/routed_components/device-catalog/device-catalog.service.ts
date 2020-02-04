import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Device } from 'src/models/entities/Device';
import { catchError, retry } from 'rxjs/operators';
import { Descriptable } from 'src/models/Descriptable';
import { CrudService } from 'src/services/.crud.service';
import { CommonHttpService } from 'src/services/http/common.http.service';

@Injectable({ providedIn: 'root' })
export class DeviceCatalogService
  implements OnDestroy {

  protected devicesArray: Device[];
  public devicesSource: Subject<Device[]>;

  public get devices(): Device[] {
    return this.devicesArray;
  }
  public set devices(devices: Device[]) {
    this.devicesArray = devices;
    this.devicesSource.next(devices);
  }

  public get deviceTypes(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceTypes();
  }

  public get deviceBrands(): Observable<Descriptable[]> {
    return this.commonData.loadDeviceBrands();
  }

  constructor(
    protected data: CrudService<Device>,
    protected commonData: CommonHttpService
  ) {
    this.devicesArray = [];
    this.devicesSource = new BehaviorSubject(this.devicesArray);
  }

  ngOnDestroy(): void {
    this.devicesSource.complete();
  }

  public reloadDevices(): void {
    this.data.loadAll()
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
