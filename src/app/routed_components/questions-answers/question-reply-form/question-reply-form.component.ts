import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LBL_MESSAGE_BODY, LBL_SIGNATURE, LBL_REPLY } from 'src/app/shared/i18/es/labels';
import { Answer } from 'src/models/entities/Answer';
import { resetForm } from 'src/app/shared/functions/resetForm';

@Component({
  selector: 'app-question-reply-form',
  templateUrl: './question-reply-form.component.html',
  styleUrls: ['./question-reply-form.component.sass']
})
export class QuestionReplyFormComponent {

  @Output() public reply: EventEmitter<Answer>;

  public formGroup: FormGroup;
  public get replyContent() { return this.formGroup.get('replyContent'); }
  public get signature() { return this.formGroup.get('signature'); }

  public get labelReplyContent(): string { return LBL_MESSAGE_BODY; }
  public get labelSignature(): string { return LBL_SIGNATURE; }
  public get labelReply(): string { return LBL_REPLY; }

  constructor(
    protected fb: FormBuilder
  ) {
    this.reply = new EventEmitter();

    this.formGroup = this.fb.group({
      replyContent: ['', Validators.required],
      signature: ['', Validators.required]
    });
  }

  public submitReply(): void {
    const newReply: Answer = {
      id: undefined,
      date: new Date(),
      author: { name: this.signature.value },
      content: this.replyContent.value,
      votes: 0,
      accepted: true
    };

    this.reply.emit(newReply);
    resetForm(this.formGroup);
  }

}
