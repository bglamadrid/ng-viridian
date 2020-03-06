import { Component, OnInit } from '@angular/core';
import { APP_VERSION } from '../app.globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent
  implements OnInit {

  public get labelVersion(): string { return APP_VERSION; }

  constructor() { }

  ngOnInit() {
  }

}
