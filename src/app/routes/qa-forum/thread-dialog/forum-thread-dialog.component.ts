import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { ForumThreadDialogData } from './ForumThreadDialogData';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-thread-dialog',
  templateUrl: './forum-thread-dialog.component.html',
  styleUrls: ['./forum-thread-dialog.component.css']
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
