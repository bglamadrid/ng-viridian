import { Component, OnInit } from '@angular/core';
import { DeviceCatalogService } from './devices.service';
import { Observable, Subscription } from 'rxjs';
import { Device } from 'src/data/models/entities/Device';
import { LBL_ADD_DEVICE } from 'src/text/es/labels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MSG_INF_OPERATION_COMPLETED } from 'src/text/es/messages';

@Component({
  providers: [ DeviceCatalogService ],
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.sass']
})
export class DevicesComponent
  implements OnInit {

  protected load: Subscription;

  public devices$: Observable<Device[]>;
  public totalItemNumber: number;

  public get labelAddDevice(): string { return LBL_ADD_DEVICE; }
  public get labelSuccess(): string { return MSG_INF_OPERATION_COMPLETED; }

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: DeviceCatalogService,
    protected snackBar: MatSnackBar
  ) {
    this.totalItemNumber = 2;
  }

  ngOnInit() {
    this.devices$ = this.svc.devicesSource.asObservable();
    this.load = this.devices$.subscribe();
    this.svc.reloadDevices();
  }

  public onClickAdd(): void {
    this.svc.openDeviceDialogFor(null).subscribe(
      (edited) => {
        if (edited) {
          this.snackBar.open(this.labelSuccess, 'OK');
        }
      }
    );
  }

  public onClickEdit(dvc: Device) {
    const deviceEditing = this.svc.openDeviceDialogFor(dvc);
    deviceEditing.subscribe(
      (edited) => {
        if (edited) {
          this.snackBar.open(this.labelSuccess, 'OK');
        }
      }
    );
  }

}
