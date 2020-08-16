import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { APP_NAME } from 'src/app/app.globals';
import { ConfirmationDialogComponent, ConfirmationDialogData } from 'src/app/shared/confirmation-dialog/confirmation.dialog.component';
import { LBL_DISCONNECT, LBL_EDIT_PROFILE, LBL_TOGGLE_SIDEMENU } from 'src/text/es/labels';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/text/es/messages';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public currentModuleNameLabel$: Observable<string>;
  public sidenavOpen$: Observable<boolean>;

  public get applicationNameLabel(): string { return APP_NAME; }
  public get userNameLabel(): string { return 'User'; }
  public get toggleSideMenuLabel(): string { return LBL_TOGGLE_SIDEMENU; }
  public get editProfileLabel(): string { return LBL_EDIT_PROFILE; }
  public get disconnectLabel(): string { return LBL_DISCONNECT; }

  public appTitle = 'Viridian';

  constructor(
    protected snackBar: MatSnackBar,
    protected dialog: MatDialog,
    protected service: AppService
  ) {
    this.currentModuleNameLabel$ = this.service.currentPageName$.pipe();
    this.sidenavOpen$ = this.service.sidenavOpen$.pipe();
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

  public onClickToggleSidenav(): void {
    this.service.toggleSidenav();
  }

  public onClickEditProfile(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }

  public onClickExitSession(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }
}
