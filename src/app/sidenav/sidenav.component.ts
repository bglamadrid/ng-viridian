import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { AppRoute, APP_ROUTES } from '../app-routing.module';
import { AppService } from '../app.service';
import { SidenavItem } from './SidenavItem';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  protected links: SidenavItem[] = [];
  protected linksSource: Subject<SidenavItem[]> = new BehaviorSubject(this.links);
  protected activeRouteSubscription: Subscription;

  public links$: Observable<SidenavItem[]> = this.linksSource.asObservable();
  public readonly baseRoute = '/';

  constructor(
    protected service: AppService
  ) {
  }

  protected routeToListItem(r: AppRoute): SidenavItem {
    return {
      path: r.path,
      text: r.data.title,
      icon: r.data.matIcon,
      enabled: false
    };
  }

  ngOnInit(): void {
    this.links = APP_ROUTES.filter(r => ('data' in r)).map(this.routeToListItem);
    this.linksSource.next(this.links);

    this.activeRouteSubscription = this.service.activeRouteSnapshot$.subscribe(
      (route: ActivatedRouteSnapshot) => {
        const mIndex = this.links.findIndex(v => v.path === route?.url[0]?.path);
        if (mIndex !== -1) {
          for (let m of this.links) { m.enabled = false; }
          this.links[mIndex].enabled = true;
          this.linksSource.next(this.links);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.activeRouteSubscription.unsubscribe();
  }

}
