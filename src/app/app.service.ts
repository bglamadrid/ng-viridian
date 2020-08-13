import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, throttleTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {

  protected sidenavOpen: boolean = true;
  protected sidenavOpenSource: Subject<boolean> = new BehaviorSubject(this.sidenavOpen);

  public sidenavOpen$: Observable<boolean> = this.sidenavOpenSource.asObservable();

  public activeRouteSnapshot$: Observable<ActivatedRouteSnapshot>;
  public currentPageName$: Observable<string>;

  constructor(
    protected router: Router
  ) {
    this.activeRouteSnapshot$ = this.router.events.pipe(
      filter(ev => ev instanceof ActivationEnd),
      throttleTime(50),
      map(ev => (ev as ActivationEnd).snapshot)
    );

    this.currentPageName$ = this.activeRouteSnapshot$.pipe(
      map(snap => snap.data.title as string)
    );
  }

  public canNavigateTo(): boolean {
    return true;
  }

  public toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavOpenSource.next(this.sidenavOpen);
  }
}
