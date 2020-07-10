import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { resetForm } from 'src/functions/resetForm';
import { LBL_MESSAGE_BODY, LBL_REPLY, LBL_SIGNATURE } from 'src/text/es/labels';
import { ForumThreadReply } from 'src/data/models/entities/ForumThreadReply';

@Component({
  selector: 'app-forum-thread-reply-form',
  templateUrl: './forum-thread-reply-form.component.html',
  styleUrls: ['./forum-thread-reply-form.component.sass']
})
export class ForumThreadReplyFormComponent {

  @Output() public reply: EventEmitter<ForumThreadReply>;

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
    const newReply: ForumThreadReply = {
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
