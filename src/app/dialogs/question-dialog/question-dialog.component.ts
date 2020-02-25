import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { QuestionDialogData } from './QuestionDialogData';
import { QuestionsAnswersService } from 'src/app/routed_components/questions-answers/questions-answers.service';
import { Question } from 'src/models/entities/Question';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.sass']
})
export class QuestionDialogComponent {

  protected svc: QuestionsAnswersService;

  public question: Question;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: QuestionDialogData,
    protected dialog: MatDialogRef<QuestionDialogComponent>
  ) {
    this.svc = data.svc;
    this.question = data.question;
  }

  public onAsk(question: Question): void {
    this.svc.insertQuestion(question).subscribe(
      (q) => {
        if (q) {
          this.dialog.close(q);
        }
      }
    );
  }

}
