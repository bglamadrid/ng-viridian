import { Component, OnInit } from '@angular/core';
import { DeviceCatalogService } from './device-catalog.service';
import { Observable, Subscription } from 'rxjs';
import { Device } from 'src/models/entities/Device';
import { LBL_ADD_DEVICE } from 'src/app/shared/i18/es/labels';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DeviceDialogComponent } from 'src/app/dialogs/device-dialog/device-dialog.component';
import { Router } from '@angular/router';
import { MSG_INF_OPERATION_COMPLETED } from 'src/app/shared/i18/es/messages';

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

  public onClickEdit(index: number, dvc: Device) {
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
