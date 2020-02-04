import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/models/entities/Device';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.sass']
})
export class DeviceCardComponent
  implements OnInit {

  @Input() public device: Device;

  constructor() { }

  ngOnInit() {
  }

}
