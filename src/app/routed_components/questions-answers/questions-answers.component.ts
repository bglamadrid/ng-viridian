import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/models/entities/Question';
import { QuestionsGridComponent } from './questions-grid/questions-grid.component';
import { QuestionCrudInMemoryService } from 'src/app/services/in-memory/crud/question.crud.in-memory.service';
import { QuestionsAnswersService } from './questions-answers.service';
import { UserProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/user-profile.crud.in-memory.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  providers: [
    QuestionCrudInMemoryService,
    UserProfileCrudInMemoryService,
    QuestionsAnswersService
  ],
  selector: 'app-qa',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.sass']
})
export class QuestionsAnswersComponent
  implements OnInit {

  protected load: Subscription;

  public questions$: Observable<Question[]>;

  @ViewChild('grid', { static: false }) public grid: QuestionsGridComponent;

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: QuestionsAnswersService
  ) {
  }

  ngOnInit() {
    this.questions$ = this.svc.questionsSource.asObservable();
    this.load = this.questions$.subscribe();
    this.svc.reloadQuestions();
  }

}
