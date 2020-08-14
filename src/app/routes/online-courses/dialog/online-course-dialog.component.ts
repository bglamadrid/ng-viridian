import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { OnlineCourseDialogData } from './OnlineCourseDialogData';

@Component({
  selector: 'app-online-course-dialog',
  templateUrl: './online-course-dialog.component.html',
  styleUrls: ['./online-course-dialog.component.css']
})
export class OnlineCourseDialogComponent {

  public course: OnlineCourse;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: OnlineCourseDialogData
  ) {
    this.course = data.onlineCourse;
  }

}
