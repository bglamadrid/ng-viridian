import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { LBL_ANSWERS_COUNT, LBL_AUTHOR, LBL_DATE_CREATED, LBL_TITLE } from 'src/app/shared/i18/es/labels';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { Question } from 'src/models/entities/Question';
import { QuestionsAnswersService } from '../questions-answers.service';

@Component({
  selector: 'app-questions-grid',
  templateUrl: './questions-grid.component.html',
  styleUrls: [
    '../../../../assets/styles/data-grid.sass',
    './questions-grid.component.sass'
  ]
})
export class QuestionsGridComponent
  extends DataGridTemplateComponent<Question>
  implements OnInit {

  @ViewChild('table', { static: true }) public table: MatTable<Question>;
  public tableColumns: string[];

  public get labelTitle(): string { return LBL_TITLE; }
  public get labelAuthor(): string { return LBL_AUTHOR; }
  public get labelDateCreated(): string { return LBL_DATE_CREATED; }
  public get labelAnswersCount(): string { return LBL_ANSWERS_COUNT; }

  constructor(
    protected svc: QuestionsAnswersService
  ) {
    super();
    this.tableColumns = [ 'title', 'author', 'dateCreated', 'answersCount' ];
  }

  ngOnInit() {
  }

  public onClickView(question: Question): void {
    this.svc.openQuestionDialogFor(question);
  }

}
