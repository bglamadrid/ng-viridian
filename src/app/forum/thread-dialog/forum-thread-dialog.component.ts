import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ForumService } from 'src/app/forum/forum.service';
import { ForumThread } from 'src/models/entities/ForumThread';
import { ForumThreadDialogData } from './ForumThreadDialogData';

@Component({
  selector: 'app-forum-thread-dialog',
  templateUrl: './forum-thread-dialog.component.html',
  styleUrls: ['./forum-thread-dialog.component.sass']
})
export class ForumThreadDialogComponent {

  protected svc: ForumService;

  public question: ForumThread;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: ForumThreadDialogData,
    protected dialog: MatDialogRef<ForumThreadDialogComponent>
  ) {
    this.svc = data.svc;
    this.question = data.question;
  }

  public onAsk(question: ForumThread): void {
    this.svc.insertQuestion(question).subscribe(
      (q) => {
        if (q) {
          this.dialog.close(q);
        }
      }
    );
  }

}
