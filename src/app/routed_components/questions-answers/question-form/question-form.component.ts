import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from 'src/models/entities/Question';
import { resetForm } from 'src/app/shared/functions/resetForm';
import { LBL_MESSAGE_BODY, LBL_SIGNATURE, LBL_ASK, LBL_ASK_A_QUESTION, LBL_TITLE } from 'src/app/shared/i18/es/labels';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.sass']
})
export class QuestionFormComponent {

  @Output() public question: EventEmitter<Question>;

  public formGroup: FormGroup;
  public get title() { return this.formGroup.get('title'); }
  public get questionContent() { return this.formGroup.get('questionContent'); }
  public get signature() { return this.formGroup.get('signature'); }

  public get labelAskQuestion(): string { return LBL_ASK_A_QUESTION; }
  public get labelTitle(): string { return LBL_TITLE; }
  public get labelQuestionContent(): string { return LBL_MESSAGE_BODY; }
  public get labelSignature(): string { return LBL_SIGNATURE; }
  public get labelAsk(): string { return LBL_ASK; }

  constructor(
    protected fb: FormBuilder
  ) {
    this.question = new EventEmitter();

    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      questionContent: ['', Validators.required],
      signature: ['', Validators.required]
    });
  }

  public submitQuestion(): void {
    const newQuestion = Object.assign(
      new Question(),
      {
        date: new Date(),
        title: this.title.value,
        author: { name: this.signature.value },
        content: this.questionContent.value
      }
    );

    this.question.emit(newQuestion);
    resetForm(this.formGroup);
  }

}
