import { Component, ViewChild } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  template: '<app-nav #nav id="nav"></app-nav>',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-forein';

  @ViewChild('nav', { static: true }) public nav: NavComponent;
}
