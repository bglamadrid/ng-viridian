import { Component, OnInit } from '@angular/core';
import { DeviceCatalogService } from './device-catalog.service';
import { Observable, Subscription } from 'rxjs';
import { Device } from 'src/models/entities/Device';

@Component({
  providers: [ DeviceCatalogService ],
  selector: 'app-device-catalog',
  templateUrl: './device-catalog.component.html',
  styleUrls: ['./device-catalog.component.sass']
})
export class DeviceCatalogComponent
  implements OnInit {

  protected load: Subscription;

  public devices$: Observable<Device[]>;
  public totalItemNumber: number;

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: DeviceCatalogService
  ) {
    this.totalItemNumber = 2;
  }

  ngOnInit() {
    this.devices$ = this.svc.devicesSource.asObservable();
    this.load = this.devices$.subscribe();
    this.svc.reloadDevices();
  }

}
