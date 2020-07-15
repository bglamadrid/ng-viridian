import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { APP_ROUTES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
  implements OnInit {

  protected set currentModuleName(v: string) { this.svc.currentModuleName = v; }

  public get sidenavOpen(): boolean { return this.svc.sidenavOpen; }

  constructor(
    protected router: Router,
    protected svc: AppService
  ) {
  }

  ngOnInit() {
    const currentPath = this.svc.currentPathName;

    if (currentPath) {
      const linkIndex = APP_ROUTES.findIndex(m => m.path === currentPath);
      if (linkIndex === -1) {
        this.router.navigateByUrl('');
      }
    }
  }
}
