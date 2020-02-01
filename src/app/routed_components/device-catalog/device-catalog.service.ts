import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Device } from 'src/models/Device';
import { DeviceCrudHttpService } from 'src/services/http/crud/device.crud.http.service';
import { catchError, retry } from 'rxjs/operators';
import { Descriptable } from 'src/models/Descriptable';

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
    return this.httpSvc.loadTypes();
  }

  public get deviceBrands(): Observable<Descriptable[]> {
    return this.httpSvc.loadBrands();
  }

  constructor(
    protected httpSvc: DeviceCrudHttpService
  ) {
    this.devicesArray = [];
    this.devicesSource = new BehaviorSubject(this.devicesArray);
  }

  ngOnDestroy(): void {
    this.devicesSource.complete();
  }

  public reloadDevices(): void {
    this.httpSvc.loadAll()
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
