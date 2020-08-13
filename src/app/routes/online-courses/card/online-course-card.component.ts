import { Component, OnInit, Input } from '@angular/core';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { LBL_NO_PHOTOS } from 'src/text/es/labels';

@Component({
  selector: 'app-online-course-card',
  templateUrl: './online-course-card.component.html',
  styleUrls: ['./online-course-card.component.css']
})
export class OnlineCourseCardComponent
  implements OnInit {

  @Input() public course: OnlineCourse;

  public get labelNoPhotos(): string { return LBL_NO_PHOTOS; }

  constructor() { }

  ngOnInit(): void {
  }

}
