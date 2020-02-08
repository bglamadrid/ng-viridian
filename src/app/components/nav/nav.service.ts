import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavItem } from './NavItem';
import { APP_ROUTES } from 'src/app/app-routes';
import { NAV_ITEMS } from './nav.items';

@Injectable({ providedIn: 'root' })
export class NavService {

  public currentModuleName: string;

  public get localParamSidenavOpen(): string | null { return localStorage.getItem('sidenavOpen'); }

  public get sidenavOpen(): boolean {
    const localParam = this.localParamSidenavOpen;
    return (typeof localParam === 'string') ?
            (localParam === 'true') :
            (true);
  }
  public set sidenavOpen(v: boolean) {
    localStorage.setItem('sidenavOpen', String(v));
  }

  constructor() {
    this.currentModuleName = '';
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
