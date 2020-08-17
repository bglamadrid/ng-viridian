import { Component, OnInit } from '@angular/core';
import { APP_NAME, APP_VERSION } from '../app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent
  implements OnInit {

  public get labelAppName(): string { return APP_NAME; }
  public get labelVersion(): string { return APP_VERSION; }

  constructor() { }

  ngOnInit() {
  }

}
