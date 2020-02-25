import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from 'src/models/entities/Question';
import { QuestionsGridComponent } from './questions-grid/questions-grid.component';
import { QuestionsAnswersService } from './questions-answers.service';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { LBL_ASK_A_QUESTION } from 'src/app/shared/i18/es/labels';
import { MSG_INF_OPERATION_COMPLETED } from 'src/app/shared/i18/es/messages';

@Component({
  providers: [ QuestionsAnswersService ],
  selector: 'app-qa',
  templateUrl: './questions-answers.component.html',
  styleUrls: ['./questions-answers.component.sass']
})
export class QuestionsAnswersComponent
  implements OnInit {

  protected load: Subscription;

  @ViewChild('grid', { static: true }) public grid: QuestionsGridComponent;

  public get labelAskQuestion(): string { return LBL_ASK_A_QUESTION; }
  public get labelSuccess(): string { return MSG_INF_OPERATION_COMPLETED; }

  public get loading(): boolean {
    return (this.load) ? this.load.closed : false;
  }

  constructor(
    protected svc: QuestionsAnswersService,
    protected snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.load = this.svc.questionsSource.asObservable().subscribe(
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
