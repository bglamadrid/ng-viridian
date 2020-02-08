import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/models/entities/Question';
import { QuestionsGridComponent } from './questions-grid/questions-grid.component';
import { QuestionCrudInMemoryService } from 'src/app/services/in-memory/crud/question.crud.in-memory.service';
import { QuestionsAnswersService } from './questions-answers.service';
import { UserProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/user-profile.crud.in-memory.service';

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

  public questions: Question[];

  @ViewChild('grid', { static: false }) public grid: QuestionsGridComponent;

  constructor(
    protected svc: QuestionsAnswersService
  ) {
  }

  ngOnInit() {
  }

}
