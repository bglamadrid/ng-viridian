import { Component, OnInit } from '@angular/core';
import { TTL_WORK_IN_PROGRESS } from 'src/text/es/titles';
import { PGPH_WORK_IN_PROGRESS } from 'src/text/es/paragraphs';
import { Lesson } from 'src/models/entities/Lesson';
import { Observable, Subscription } from 'rxjs';
import { LessonsService } from './lessons.service';

@Component({
  providers: [ LessonsService ],
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.sass']
})
export class LessonsComponent
  implements OnInit {

  protected load: Subscription;

  public lessons$: Observable<Lesson[]>;

  // public get labelWIP(): string { return TTL_WORK_IN_PROGRESS; }
  // public get labelWIPSummary(): string { return PGPH_WORK_IN_PROGRESS; }

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: LessonsService
  ) { }

  ngOnInit() {
    this.lessons$ = this.svc.lessonsSource.asObservable();
    this.load = this.lessons$.subscribe();
    this.svc.reloadLessons();
  }

}
