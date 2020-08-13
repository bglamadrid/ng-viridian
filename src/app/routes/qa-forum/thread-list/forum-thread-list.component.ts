import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DataGridTemplateComponent } from 'src/app/shared/data-grid.template.component';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { LBL_ANSWERS_COUNT, LBL_AUTHOR, LBL_DATE_CREATED, LBL_TITLE } from 'src/text/es/labels';
import { ForumService } from '../forum.service';
import { ForumThreadDialogComponent } from '../thread-dialog/forum-thread-dialog.component';
import { ForumThreadDialogData } from '../thread-dialog/ForumThreadDialogData';

@Component({
  selector: 'app-forum-thread-list',
  templateUrl: './forum-thread-list.component.html',
  styleUrls: [ './forum-thread-list.component.css' ]
})
export class ForumThreadListComponent
  extends DataGridTemplateComponent<ForumThread> {

  @ViewChild('table', { static: true }) public table: MatTable<ForumThread>;
  public tableColumns: string[];

  public get labelTitle(): string { return LBL_TITLE; }
  public get labelAuthor(): string { return LBL_AUTHOR; }
  public get labelDateCreated(): string { return LBL_DATE_CREATED; }
  public get labelAnswersCount(): string { return LBL_ANSWERS_COUNT; }

  constructor(
    protected svc: ForumService,
    protected dialogs: MatDialog
  ) {
    super();
    this.tableColumns = [ 'title', 'author', 'dateCreated', 'answersCount' ];
  }

  protected openQuestionDialogFor(dvc: ForumThread): Observable<ForumThread> {
    const dialogData: ForumThreadDialogData = {
      question: dvc ? dvc : null
    };
    return this.dialogs.open(
      ForumThreadDialogComponent,
      {
        width: '40rem',
        height: '40rem',
        panelClass: [ 'no-padding' ],
        data: dialogData
      }
    ).afterClosed();
  }

  public onClickView(question: ForumThread): void {
    this.openQuestionDialogFor(question);
  }

}
