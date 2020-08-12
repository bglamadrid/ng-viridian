import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LBL_REPLY_TO_THIS_QUESTION } from 'src/text/es/labels';
import { MSG_ERR_UNKNOWN, MSG_INF_OPERATION_COMPLETED } from 'src/text/es/messages';
import { ForumThreadReply } from 'src/data/models/entities/ForumThreadReply';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { ForumService } from '../forum.service';

@Component({
  providers: [ ForumService ],
  selector: 'app-forum-thread',
  templateUrl: './forum-thread.component.html',
  styleUrls: ['./forum-thread.component.css']
})
export class ForumThreadComponent {

  @Input() public question: ForumThread;

  public get labelReplyToQuestion(): string { return LBL_REPLY_TO_THIS_QUESTION; }

  constructor(
    public svc: ForumService,
    protected snackBar: MatSnackBar
  ) { }

  public onClickThumbsUpAnswer(a: ForumThreadReply): void {
    a.votes++;
  }

  public onReply(reply: ForumThreadReply): void {
    this.svc.replyToQuestion(reply, this.question.id).subscribe(
      (wasSuccessful) => {
        if (wasSuccessful) {
          this.snackBar.open(MSG_INF_OPERATION_COMPLETED, 'OK');
        } else {
          this.snackBar.open(MSG_ERR_UNKNOWN);
        }
      }
    );
  }

}
