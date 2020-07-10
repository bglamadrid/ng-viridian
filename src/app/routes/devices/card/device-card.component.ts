import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/data/models/entities/Device';
import { LBL_NO_PHOTOS, LBL_NO_DESCRIPTION } from 'src/text/es/labels';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.sass']
})
export class DeviceCardComponent
  implements OnInit {

  @Input() public device: Device;

  public get labelNoPhotos(): string { return LBL_NO_PHOTOS; }
  public get labelNoDescription(): string { return LBL_NO_DESCRIPTION; }

  constructor() { }

  ngOnInit() {
  }

}
