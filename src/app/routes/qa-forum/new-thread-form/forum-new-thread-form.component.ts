import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { resetForm } from 'src/functions/resetForm';
import { LBL_ASK, LBL_ASK_A_QUESTION, LBL_MESSAGE_BODY, LBL_SIGNATURE, LBL_TITLE } from 'src/text/es/labels';
import { ForumThread } from 'src/data/models/entities/ForumThread';

@Component({
  selector: 'app-forum-new-thread-form',
  templateUrl: './forum-new-thread-form.component.html',
  styleUrls: ['./forum-new-thread-form.component.css']
})
export class ForumNewThreadFormComponent {

  @Output() public question: EventEmitter<ForumThread>;

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
      new ForumThread(),
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
