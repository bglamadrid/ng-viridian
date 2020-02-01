import { Component, ViewChild } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public title = 'app-forein';

  @ViewChild('nav', { static: true })
    public nav: NavComponent;
}
