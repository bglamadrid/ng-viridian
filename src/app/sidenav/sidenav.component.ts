import { Component, OnInit } from '@angular/core';
import { SidenavItem } from './SidenavItem';
import { AppService } from '../app.service';
import { isMobileScreen } from 'src/functions/isMobileScreen';
import { SIDENAV_ITEMS } from './sidenav.items';
import { APP_ROUTES } from '../app-routing.module';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent
  implements OnInit {

  public links: SidenavItem[];

  constructor(
    protected svc: AppService
  ) {
    this.links = this.loadItems();
  }

  ngOnInit() {
    const currentPath = this.svc.currentPathName;

    if (currentPath) {
      const linkIndex = this.links.findIndex(m => m.path === currentPath);
      if (linkIndex !== -1) {
        this.setActiveItem(linkIndex);
      }
    }
  }

  protected loadItems(): SidenavItem[] {
    return APP_ROUTES.filter(
      r => (
        r.path in SIDENAV_ITEMS &&
        this.svc.canNavigateTo()
      )
    ).map(
      r => SIDENAV_ITEMS[r.path]
    );
  }

  protected setActiveItem(linkIndex: number) {
    const item = this.links[linkIndex];
    this.svc.currentModuleName = item.text;
    this.links.forEach(m => { m.enabled = false; });
    item.enabled = true;
  }

  public onNavigation(linkIndex: number) {
    if (isMobileScreen()) {
      this.svc.sidenavOpen = false;
    }
    this.setActiveItem(linkIndex);
  }

}
