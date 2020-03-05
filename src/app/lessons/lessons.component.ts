import { Component, OnInit } from '@angular/core';
import { TTL_WORK_IN_PROGRESS } from 'src/text/es/titles';
import { PGPH_WORK_IN_PROGRESS } from 'src/text/es/paragraphs';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent
  implements OnInit {

  public get labelWIP(): string { return TTL_WORK_IN_PROGRESS; }
  public get labelWIPSummary(): string { return PGPH_WORK_IN_PROGRESS; }

  constructor() { }

  ngOnInit() {
  }

}
