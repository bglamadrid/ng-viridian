import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonProfileCrudHttpService } from 'src/app/services/http/crud/person-profile.crud.http.service';
import { SessionsHttpService } from 'src/app/services/http/sessions.http.service';
import { NavItem } from './NavItem';
import { BASE_ROUTE } from 'src/app/app.routes';
import { NavService } from './nav.service';
import { CrudService } from 'src/app/services/.crud.service';
import { PersonProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/person-profile.crud.in-memory.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [
    './nav.component.sass'
  ]
})
export class NavComponent
  implements OnInit {

  public modules: NavItem[];

  public get sidenavOpen(): boolean { return this.svc.sidenavOpen; }
  public get baseRoute(): string { return `/${BASE_ROUTE}`; }

  protected set currentModuleName(v: string) { this.svc.currentModuleName = v; }

  constructor(
    protected profiles: PersonProfileCrudInMemoryService,
    // protected sessionsHttpSvc: SessionsHttpService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected svc: NavService
  ) {
    this.modules = this.svc.loadNavItems();
  }

  ngOnInit(): void {
    const currentRoute = this.route.firstChild;
    console.log(this.route);

    if (currentRoute) {
      const moduleRoutePath = currentRoute.routeConfig.path;
      alert(moduleRoutePath);
      const moduleIndex = this.modules.findIndex(m => m.path === moduleRoutePath);
      const module = this.modules[moduleIndex];
      this.onClickNavigationItem(moduleIndex);
      this.router.navigate([module.path], { relativeTo: this.route });
    }
  }

  public onClickNavigationItem(index: number) {
    const item = this.modules[index];
    this.modules.forEach(m => { m.enabled = false; });
    this.svc.currentModuleName = item.text;
    item.enabled = true;
  }
}
