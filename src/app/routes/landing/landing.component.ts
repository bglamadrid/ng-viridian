import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { ForumService } from '../forum/forum.service';
import { ForumThreadListComponent } from '../forum/thread-list/forum-thread-list.component';

@Component({
  providers: [ ForumService ],
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.css' ]
})
export class LandingComponent
  implements OnInit {

  // TODO

  @ViewChild('questionsGrid', { static: true }) public grid: ForumThreadListComponent;
  public latestQuestions$: Observable<ForumThread[]>;
  public latestQuestionsLoad: Subscription;

  public get loadingLatestQuestions(): boolean {
    return this.latestQuestionsLoad ? this.latestQuestionsLoad.closed : false;
  }

  constructor(

    /* UNCOMMENT WHEN item collection size/count is implemented
      protected qSvc: QuestionsAnswersService
    */
  ) {
    // DELETE this and the next 3 lines
    // WHEN item collection size/count is implemented
    this.latestQuestions$ = of([]);
    this.latestQuestionsLoad = this.latestQuestions$.subscribe();
  }

  ngOnInit() {

    /* UNCOMMENT WHEN item collection size/count is implemented

      this.latestQuestions$ = this.qSvc.questionsSource.asObservable();
      this.latestQuestionsLoad = this.latestQuestions$.subscribe();
      this.qSvc.reloadQuestions();

    */
  }

}
