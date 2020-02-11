import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonProfileCrudHttpService } from 'src/app/services/http/crud/person-profile.crud.http.service';
import { SessionsHttpService } from 'src/app/services/http/sessions.http.service';
import { NavItem } from './NavItem';
import { BASE_ROUTE } from 'src/app/app-routes';
import { NavService } from './nav.service';
import { CrudService } from 'src/app/services/.crud.service';
import { PersonProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/person-profile.crud.in-memory.service';

@Component({
  providers: [ PersonProfileCrudInMemoryService ],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [
    './nav.component.sass'
  ]
})
export class NavComponent
  implements OnInit {

  public links: NavItem[];

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
      this.links = this.svc.loadNavItems();
  }

  ngOnInit(): void {
    const currentPath = this.svc.currentPathName;
    if (currentPath) {
      const linkIndex = this.links.findIndex(m => m.path === currentPath);
      this.onNavigation(linkIndex);
    }
  }

  public onNavigation(linkIndex: number) {
    const item = this.links[linkIndex];
    this.links.forEach(m => { m.enabled = false; });
    this.svc.currentModuleName = item.text;
    item.enabled = true;
  }
}
