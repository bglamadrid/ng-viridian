import { Injectable, OnDestroy } from '@angular/core';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/app/app-routes';
import { NAV_ITEMS } from './nav.items';
import { isMobileScreen } from 'src/functions/isMobileScreen';

@Injectable({ providedIn: 'root' })
export class NavService
  implements OnDestroy {

  public currentModuleName: string;

  public get localParamSidenavOpen(): string | null { return localStorage.getItem('sidenavOpen'); }

  public get sidenavOpen(): boolean {
    const localParam = this.localParamSidenavOpen;
    if (localParam === null) {
      return !isMobileScreen();
    }

    return (localParam === 'true');
  }
  public set sidenavOpen(v: boolean) {
    localStorage.setItem('sidenavOpen', String(v));
  }

  public get currentPathName(): string {
    const pathSplits = location.pathname.split('/');
    console.log(pathSplits);
    return pathSplits[1];
  }

  constructor() {
    this.currentModuleName = '';
  }

  ngOnDestroy(): void {
    localStorage.removeItem('sidenavOpen');
  }

  public canNavigateTo(): boolean {
    return true;
  }

  public loadNavItems(): NavItem[] {

    return APP_ROUTES.filter(
      r => (
        r.path in NAV_ITEMS &&
        this.canNavigateTo()
      )
    ).map(
      r => NAV_ITEMS[r.path]
    );
  }
}
