import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { ForumThreadDialogComponent } from 'src/app/forum/thread-dialog/forum-thread-dialog.component';
import { ForumThreadDialogData } from 'src/app/forum/thread-dialog/ForumThreadDialogData';
import { QuestionCrudInMemoryService } from 'src/app/services/in-memory/crud/question.crud.in-memory.service';
import { UserProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/user-profile.crud.in-memory.service';
import { ForumThreadReply } from 'src/models/entities/ForumThreadReply';
import { ForumThread } from 'src/models/entities/ForumThread';
import { UserProfile } from 'src/models/entities/UserProfile';
import { ForumFilters } from './filters-panel/ForumFilters';

@Injectable()
export class ForumService
  implements OnDestroy {

  protected threadsArray: ForumThread[];
  public threadsSource: Subject<ForumThread[]>;
  public filters: Partial<ForumFilters>;

  public get questions(): ForumThread[] {
    return this.threadsArray;
  }
  public set questions(questions: ForumThread[]) {

    this.threadsArray = questions;
    this.threadsSource.next(questions);
  }

  public get users$(): Observable<UserProfile[]> {
    return this.usersData.readAll();
  }

  constructor(
    protected data: QuestionCrudInMemoryService,
    protected usersData: UserProfileCrudInMemoryService,
    protected dialogs: MatDialog
  ) {
    this.threadsArray = [];
    this.threadsSource = new BehaviorSubject(this.threadsArray);
    this.filters = {};
  }

  ngOnDestroy(): void {
    this.threadsSource.complete();
  }

  public reloadQuestions(): void {
    const noFilters = (JSON.stringify(this.filters) === '{}');
    const query: Observable<ForumThread[]> = noFilters ? this.data.readAll() : this.data.readFiltered(this.filters);

    query.pipe(
      catchError(() => []),
      retry(1)
    ).subscribe(
      items => {
        if (items) {
          this.questions = items;
        }
      }
    );
  }

  public openQuestionDialogFor(dvc: ForumThread): Observable<ForumThread> {
    const dialogData: ForumThreadDialogData = {
      svc: this,
      question: dvc ? dvc : null
    };
    const dialog = this.dialogs.open(
      ForumThreadDialogComponent,
      {
        width: '60em',
        height: '35em',
        panelClass: [ 'no-padding' ],
        data: dialogData
      }
    );

    return dialog.afterClosed();
  }

  public insertQuestion(qst: ForumThread): Observable<ForumThread> {
    return this.data.create(qst);
  }
  public updateQuestion(qst: ForumThread): Observable<ForumThread> {
    return this.data.update(qst, qst.id);
  }
  public replyToQuestion(ans: ForumThreadReply, qstId: number): Observable<boolean> {
    return this.data.readById(qstId).pipe(
      tap(
        (q) => {
          if (q) {
            q.answers.push(ans);
            this.data.update(q, qstId).subscribe();
          }
        }
      ),
      map(q => !!q)
    );
  }

}
