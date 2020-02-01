import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/assets/standard_messages';
import { ConfirmationDialogData, ConfirmationDialogComponent } from 'src/app/shared/dialogs/confirmation/confirmation.dialog.component';
import { Observable } from 'rxjs';
import { NavService } from '../nav.service';
import { APPLICATION_NAME } from 'src/app/app.module.constants';
import { LBL_TOGGLE_SIDEMENU, LBL_EDIT_PROFILE, LBL_DISCONNECT } from 'src/assets/standard_labels';

@Component({
  selector: 'app-nav-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class NavHeaderComponent
  implements OnInit {

  public get sidenavOpen(): boolean { return this.svc.sidenavOpen; }
  public set sidenavOpen(v: boolean) { this.svc.sidenavOpen = v; }

  public get applicationNameLabel(): string { return APPLICATION_NAME; }
  public get currentModuleNameLabel(): string { return this.svc.currentModuleName; }
  public get userNameLabel(): string { return 'User'; }
  public get toggleSideMenuLabel(): string { return LBL_TOGGLE_SIDEMENU; }
  public get editProfileLabel(): string { return LBL_EDIT_PROFILE; }
  public get disconnectLabel(): string { return LBL_DISCONNECT; }

  constructor(
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog,
    protected svc: NavService
  ) { }

  ngOnInit() {
  }

  protected askToConfirmExitSession(): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title: '¿Cerrar sesión?',
      message: 'Cualquier cambio no guardado se perderá.'
    };

    return this.dialog.open(
      ConfirmationDialogComponent,
      {
        width: '24rem',
        data: dialogData
      }
    ).afterClosed();
  }

  public onClickEditProfile(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }

  public onClickExitSession(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }
}
