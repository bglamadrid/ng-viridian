import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription, Observable } from 'rxjs';
import { LBL_ASK_A_QUESTION } from 'src/text/es/labels';
import { MSG_INF_OPERATION_COMPLETED } from 'src/text/es/messages';
import { ForumService } from './forum.service';
import { ForumThreadListComponent } from './thread-list/forum-thread-list.component';
import { MatDialog } from '@angular/material/dialog';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { ForumThreadDialogData } from './thread-dialog/ForumThreadDialogData';
import { ForumThreadDialogComponent } from './thread-dialog/forum-thread-dialog.component';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent
  implements OnInit {

  protected load: Subscription;

  @ViewChild('grid', { static: true }) public grid: ForumThreadListComponent;

  public get labelAskQuestion(): string { return LBL_ASK_A_QUESTION; }
  public get labelSuccess(): string { return MSG_INF_OPERATION_COMPLETED; }

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: ForumService,
    protected snackBar: MatSnackBar,
    protected dialogs: MatDialog
  ) {
  }

  ngOnInit() {
    this.load = this.svc.threadsSource.asObservable().subscribe(
      items => {
        if (items) {
          this.grid.items = items;
        }
      }
    );
    this.svc.reloadQuestions();
  }

  protected openNewThreadDialog(): Observable<ForumThread> {
    return this.dialogs.open(
      ForumThreadDialogComponent,
      {
        width: '40rem',
        maxHeight: '40rem',
        panelClass: [ 'no-padding' ]
      }
    ).afterClosed();
  }

  public onClickStartNewThread(): void {
    this.openNewThreadDialog().subscribe(
      (createdThread) => {
        if (createdThread) {
          this.snackBar.open(this.labelSuccess, 'OK');
          this.svc.reloadQuestions();
        }
      }
    );
  }

}
