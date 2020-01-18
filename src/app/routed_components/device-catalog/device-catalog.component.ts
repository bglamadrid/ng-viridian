import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/models/entities/Computer';
import { ComputerPart } from 'src/models/entities/ComputerPart';

@Component({
  selector: 'app-device-catalog',
  templateUrl: './device-catalog.component.html',
  styleUrls: ['./device-catalog.component.sass']
})
export class DeviceCatalogComponent
  implements OnInit {

  public devices: (Computer | ComputerPart)[];

  constructor() {
  }

  ngOnInit() {
  }

}
