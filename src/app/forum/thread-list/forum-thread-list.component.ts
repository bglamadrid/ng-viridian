import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { LBL_ANSWERS_COUNT, LBL_AUTHOR, LBL_DATE_CREATED, LBL_TITLE } from 'src/text/es/labels';
import { DataGridTemplateComponent } from 'src/app/templates/data-grid.template.component';
import { ForumThread } from 'src/models/entities/ForumThread';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-thread-list',
  templateUrl: './forum-thread-list.component.html',
  styleUrls: [
    '../../../assets/styles/data-grid.sass',
    './forum-thread-list.component.sass'
  ]
})
export class ForumThreadListComponent
  extends DataGridTemplateComponent<ForumThread>
  implements OnInit {

  @ViewChild('table', { static: true }) public table: MatTable<ForumThread>;
  public tableColumns: string[];

  public get labelTitle(): string { return LBL_TITLE; }
  public get labelAuthor(): string { return LBL_AUTHOR; }
  public get labelDateCreated(): string { return LBL_DATE_CREATED; }
  public get labelAnswersCount(): string { return LBL_ANSWERS_COUNT; }

  constructor(
    protected svc: ForumService
  ) {
    super();
    this.tableColumns = [ 'title', 'author', 'dateCreated', 'answersCount' ];
  }

  ngOnInit() {
  }

  public onClickView(question: ForumThread): void {
    this.svc.openQuestionDialogFor(question);
  }

}
