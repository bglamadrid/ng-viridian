import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PersonProfileCrudHttpService } from 'src/services/http/crud/person-profile.crud.http.service';
import { SessionsHttpService } from 'src/services/http/sessions.http.service';
import { ConfirmationDialogComponent, ConfirmationDialogData } from 'src/app/shared/dialogs/confirmation/confirmation.dialog.component';
import { NAV_ITEMS } from './nav.items';
import { NavItem } from './NavItem';
import { BASE_ROUTE, APP_ROUTES } from 'src/app/app.routes';
import { APPLICATION_NAME } from 'src/app/app.module.constants';
import { LBL_EDIT_PROFILE, LBL_DISCONNECT, LBL_TOGGLE_SIDEMENU } from 'src/assets/standard_labels';
import { MSG_INF_UNSUPPORTED_OPERATION } from 'src/assets/standard_messages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [
    './nav.component.sass'
  ]
})
export class NavComponent implements OnInit, OnDestroy {

  protected sessionChangeSubscription: Subscription;
  protected currentModuleName: string;

  public modules: NavItem[];
  public sidenavOpened = true;

  constructor(
    protected profilesHttpSvc: PersonProfileCrudHttpService,
    protected sessionsHttpSvc: SessionsHttpService,
    protected router: Router,
    protected snackBar: MatSnackBar,
    protected route: ActivatedRoute,
    protected dialog: MatDialog
  ) {
    this.currentModuleName = '';
  }

  public get applicationNameLabel(): string { return APPLICATION_NAME; }
  public get moduleNameLabel(): string { return this.currentModuleName; }
  public get userNameLabel(): string { return 'User'; }
  public get toggleSideMenuLabel(): string { return LBL_TOGGLE_SIDEMENU; }
  public get editProfileLabel(): string { return LBL_EDIT_PROFILE; }
  public get disconnectLabel(): string { return LBL_DISCONNECT; }

  public get baseRoute() { return `/${BASE_ROUTE}`; }
  public get currentRoute() { return this.route.firstChild; }

  ngOnInit(): void {
    this.modules = this.loadNavItems();

    if (this.currentRoute) {
      const moduleRoutePath = this.currentRoute.routeConfig.path;
      const moduleIndex = this.modules.findIndex(m => m.path === moduleRoutePath);
      const module = this.modules[moduleIndex];
      this.onClickNavigationItem(moduleIndex);
      this.router.navigate([module.path], { relativeTo: this.route });
    }
  }

  ngOnDestroy(): void {
    if (this.sessionChangeSubscription) {
      this.sessionChangeSubscription.unsubscribe();
    }
  }

  protected canNavigateTo(moduleName: string): boolean {
    return true;
  }

  protected loadNavItems(): NavItem[] {

    return APP_ROUTES.filter(
      r => (r.path !== '**' && this.canNavigateTo(r.path))
    ).map(
      r => NAV_ITEMS[r.path]
    );
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

  public onClickNavigationItem(index: number) {
    const item = this.modules[index];
    this.modules.forEach(m => m.enabled = false);
    this.currentModuleName = item.text;
    item.enabled = true;
  }

  public onClickEditProfile(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }

  public onClickExitSession(): void {
    this.snackBar.open(MSG_INF_UNSUPPORTED_OPERATION);
  }
}
