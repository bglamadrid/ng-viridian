import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { LBL_ASK_A_QUESTION } from 'src/text/es/labels';
import { MSG_INF_OPERATION_COMPLETED } from 'src/text/es/messages';
import { ForumService } from './forum.service';
import { ForumThreadListComponent } from './thread-list/forum-thread-list.component';

@Component({
  providers: [ ForumService ],
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass']
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
    protected snackBar: MatSnackBar
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

  public onClickAskQuestion(): void {
    this.svc.openQuestionDialogFor(null).subscribe(
      (edited) => {
        if (edited) {
          this.snackBar.open(this.labelSuccess, 'OK');
          this.svc.reloadQuestions();
        }
      }
    );
  }

}
