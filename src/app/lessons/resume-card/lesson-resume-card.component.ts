import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/models/entities/Lesson';
import { LBL_VIEW_MORE } from 'src/text/es/labels';

@Component({
  selector: 'app-lesson-resume-card',
  templateUrl: './lesson-resume-card.component.html',
  styleUrls: ['./lesson-resume-card.component.sass']
})
export class LessonResumeCardComponent
  implements OnInit {

  @Input() public lesson: Lesson;

  public get labelViewMore(): string { return LBL_VIEW_MORE; }

  constructor() { }

  ngOnInit() {
  }

}
