import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnlineCourse } from 'src/data/models/entities/OnlineCourse';
import { OnlineCourseDialogData } from './OnlineCourseDialogData';
import { SafeHtml } from '@angular/platform-browser';
import { LBL_NO_PHOTOS } from 'src/text/es/labels';

@Component({
  selector: 'app-online-course-dialog',
  templateUrl: './online-course-dialog.component.html',
  styleUrls: ['./online-course-dialog.component.css']
})
export class OnlineCourseDialogComponent {

  public course: OnlineCourse;

  public youtubeURL: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: OnlineCourseDialogData
  ) {
    this.course = data.onlineCourse;
    this.youtubeURL =  'https://www.youtube.com/embed/' + data.onlineCourse.youtubeVideoId;
  }

}
