import { Component, OnInit, Input } from '@angular/core';
import { Computer } from 'src/models/entities/Computer';
import { ComputerPart } from 'src/models/entities/ComputerPart';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.sass']
})
export class DeviceCardComponent
  implements OnInit {

  @Input() public device: (Computer | ComputerPart);

  constructor() { }

  ngOnInit() {
  }

}
