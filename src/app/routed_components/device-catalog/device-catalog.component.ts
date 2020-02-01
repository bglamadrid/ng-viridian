import { Component, OnInit } from '@angular/core';
import { DeviceCatalogService } from './device-catalog.service';
import { Observable, Subscription } from 'rxjs';
import { Marketable } from 'src/models/Brandable';

@Component({
  selector: 'app-device-catalog',
  templateUrl: './device-catalog.component.html',
  styleUrls: ['./device-catalog.component.sass']
})
export class DeviceCatalogComponent
  implements OnInit {

  protected devices$: Observable<Marketable[]>;
  protected load: Subscription;

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: DeviceCatalogService
  ) {
  }

  ngOnInit() {
    this.devices$ = this.svc.devicesSource.asObservable();
    this.load = this.devices$.subscribe();
    this.svc.reloadDevices();
  }

}
