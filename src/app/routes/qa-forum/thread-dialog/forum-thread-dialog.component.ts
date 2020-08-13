import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForumThread } from 'src/data/models/entities/ForumThread';
import { ForumService } from '../forum.service';
import { ForumThreadDialogData } from './ForumThreadDialogData';

@Component({
  selector: 'app-forum-thread-dialog',
  templateUrl: './forum-thread-dialog.component.html',
  styleUrls: ['./forum-thread-dialog.component.css']
})
export class ForumThreadDialogComponent {

  public question: ForumThread;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: ForumThreadDialogData,
    protected svc: ForumService,
    protected dialog: MatDialogRef<ForumThreadDialogComponent>
  ) {
    this.question = (data?.question) ? data.question : null;
  }

  public onAsk(question: ForumThread): void {
    this.svc.insertQuestion(question).subscribe(
      (result) => {
        if (result) {
          this.dialog.close(result);
        }
      }
    );
  }

}
