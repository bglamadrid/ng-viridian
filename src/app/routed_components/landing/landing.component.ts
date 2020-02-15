import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { Question } from 'src/models/entities/Question';
import { QuestionsAnswersService } from '../questions-answers/questions-answers.service';
import { QuestionsGridComponent } from '../questions-answers/questions-grid/questions-grid.component';

@Component({
  providers: [ QuestionsAnswersService ],
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    '../../../assets/styles/single-card-page.sass',
    './landing.component.sass'
  ]
})
export class LandingComponent
  implements OnInit {

  // TODO

  @ViewChild('questionsGrid', { static: true }) public grid: QuestionsGridComponent;
  public latestQuestions$: Observable<Question[]>;
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
