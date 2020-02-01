import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Marketable } from 'src/models/Brandable';
import { DeviceCrudHttpService } from 'src/services/http/crud/device.crud.http.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DeviceCatalogService
  implements OnDestroy {

  protected devicesArray: Marketable[];
  public devicesSource: Subject<Marketable[]>;

  constructor(
    protected httpSvc: DeviceCrudHttpService
  ) {
    this.devicesArray = [];
    this.devicesSource = new BehaviorSubject(this.devicesArray);
  }

  ngOnDestroy(): void {
    this.devicesSource.complete();
  }

  public get devices(): Marketable[] {
    return this.devicesArray;
  }

  public set devices(devices: Marketable[]) {
    this.devicesArray = devices;
    this.devicesSource.next(devices);
  }

  public reloadDevices(): void {
    this.httpSvc.loadAll()
    .pipe(
      catchError(err => []),
      retry(1)
    ).subscribe(
      (items: Marketable[]) => {
        if (items) {
          this.devices = items;
        }
      }
    );
  }
}
