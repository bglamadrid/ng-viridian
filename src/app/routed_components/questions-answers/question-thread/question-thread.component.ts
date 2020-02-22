import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/models/entities/Question';
import { LBL_REPLY, LBL_REPLY_TO_THIS_QUESTION, LBL_MESSAGE_BODY, LBL_SIGNATURE } from 'src/app/shared/i18/es/labels';
import { Answer } from 'src/models/entities/Answer';
import { QuestionsAnswersService } from '../questions-answers.service';
import { MSG_INF_OPERATION_COMPLETED, MSG_ERR_UNKNOWN } from 'src/app/shared/i18/es/messages';
import { MatSnackBar } from '@angular/material';

@Component({
  providers: [ QuestionsAnswersService ],
  selector: 'app-question-thread',
  templateUrl: './question-thread.component.html',
  styleUrls: ['./question-thread.component.sass']
})
export class QuestionThreadComponent {

  @Input() public question: Question;

  public get labelReplyToQuestion(): string { return LBL_REPLY_TO_THIS_QUESTION; }

  constructor(
    public svc: QuestionsAnswersService,
    protected snackBar: MatSnackBar
  ) { }

  public onClickThumbsUpAnswer(a: Answer): void {
    a.votes++;
  }

  public onReply(reply: Answer): void {
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
