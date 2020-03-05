import { Component, ViewChild } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @ViewChild('nav', { static: true }) public nav: NavComponent;
}
