import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, finalize, retry } from 'rxjs/operators';
import { Descriptable } from 'src/data/models/Descriptable';
import { Device } from 'src/data/models/entities/Device';
import { CommonDataIService } from 'src/data/services/common-data.iservice';
import { DATA_INJECTION_TOKENS } from 'src/data/services/data-injection-tokens';
import { EntityDataIService } from 'src/data/services/entity.data.iservice';
import { DeviceFilters } from './DeviceFilters';

@Injectable({ providedIn: 'root' })
export class DevicesService
  implements OnDestroy {

  protected devicesArray: Device[] = [];
  protected submittingSource: Subject<boolean> = new BehaviorSubject(false);
  protected devicesSource: Subject<Device[]> = new BehaviorSubject(this.devicesArray);

  public filters: Partial<DeviceFilters> = {};

  public devices$: Observable<Device[]> = this.devicesSource.asObservable();
  public submitting$: Observable<boolean> = this.submittingSource.asObservable();

  public get devices(): Device[] {
    return this.devicesArray;
  }
  public set devices(devices: Device[]) {
    this.devicesArray = devices;
    this.devicesSource.next(devices);
  }

  public get deviceFamilies$(): Observable<Descriptable[]> {
    return this.commonData.deviceFamilies$;
  }

  public get deviceBrands$(): Observable<Descriptable[]> {
    return this.commonData.deviceBrands$;
  }

  constructor(
    @Inject(DATA_INJECTION_TOKENS.devices) protected data: EntityDataIService<Device>,
    @Inject(DATA_INJECTION_TOKENS.common) protected commonData: CommonDataIService
  ) {
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

  public insertDevice(dvc: Device): Observable<Device> {
    this.submittingSource.next(true);
    const request = (!dvc.id) ? this.data.create(dvc) : this.data.update(dvc, dvc.id);
    return request.pipe(
      finalize(
        () => {
          this.submittingSource.next(false);
        }
      )
    );
  }
}
