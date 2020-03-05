import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_ROUTE } from 'src/app/app-routes';
import { PeopleInMemoryDataService } from 'src/data/in-memory/people.in-memory.data.service';
import { NavService } from './nav.service';
import { NavItem } from './NavItem';

@Component({
  providers: [ PeopleInMemoryDataService ],
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
    protected profiles: PeopleInMemoryDataService,
    // protected sessionsHttpSvc: SessionsHttpService,
    protected router: Router,
    protected svc: NavService
  ) {
      this.links = this.svc.loadNavItems();
  }

  ngOnInit() {
    const currentPath = this.svc.currentPathName;
    console.log(`currentPath: ${currentPath}`);

    if (currentPath) {
      const linkIndex = this.links.findIndex(m => m.path === currentPath);
      console.log(`linkIndex: ${linkIndex}`);
      if (linkIndex !== -1) {
        this.onNavigation(linkIndex);
      } else {
        this.router.navigateByUrl(this.links[0].path);
      }
    }
  }

  public onNavigation(linkIndex: number) {
    const item = this.links[linkIndex];
    this.svc.currentModuleName = item.text;
    this.links.forEach(m => { m.enabled = false; });
    item.enabled = true;
  }
}
