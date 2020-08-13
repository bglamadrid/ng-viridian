import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { APP_ROUTES } from './app-routing.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public sidenavOpen$: Observable<boolean>;

  constructor(
    protected service: AppService
  ) {
    this.sidenavOpen$ = this.service.sidenavOpen$.pipe();
  }
}
