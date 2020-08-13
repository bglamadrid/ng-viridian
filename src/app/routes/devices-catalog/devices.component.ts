import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subscription } from 'rxjs';
import { Device } from 'src/data/models/entities/Device';
import { LBL_ADD_DEVICE } from 'src/text/es/labels';
import { MSG_INF_OPERATION_COMPLETED } from 'src/text/es/messages';
import { DevicesService } from './devices.service';
import { DeviceDialogComponent } from './dialog/device-dialog.component';
import { DeviceDialogData } from './dialog/DeviceDialogData';
import { MatDialog } from '@angular/material/dialog';
import { mapTo, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent
  implements OnInit {

  public devices$: Observable<Device[]>;
  public loading$: Observable<boolean>;
  public totalItemNumber: number;

  public get labelAddDevice(): string { return LBL_ADD_DEVICE; }
  public get labelSuccess(): string { return MSG_INF_OPERATION_COMPLETED; }

  constructor(
    protected service: DevicesService,
    protected snackBarService: MatSnackBar,
    protected dialogService: MatDialog
  ) {
    this.totalItemNumber = 2;
  }

  ngOnInit() {
    this.devices$ = this.service.devices$.pipe();
    this.loading$ = this.devices$.pipe(startWith(true), mapTo(false));
    this.service.reloadDevices();
  }

  protected openDeviceDialogFor(dvc: Device): Observable<Device> {
    const dialogData: DeviceDialogData = {
      device: dvc ? dvc : null
    };

    return this.dialogService.open(
      DeviceDialogComponent,
      {
        panelClass: [ 'with-actions' ],
        width: '40rem',
        height: '40rem',
        maxHeight: '90%',
        data: dialogData
      }
    ).afterClosed();
  }

  public onClickAdd(): void {
    this.openDeviceDialogFor(null).subscribe(
      (edited) => {
        if (edited) {
          this.snackBarService.open(this.labelSuccess, 'OK');
        }
      }
    );
  }

  public onClickEdit(dvc: Device) {
    const deviceEditing = this.openDeviceDialogFor(dvc);
    deviceEditing.subscribe(
      (edited) => {
        if (edited) {
          this.snackBarService.open(this.labelSuccess, 'OK');
        }
      }
    );
  }

}
