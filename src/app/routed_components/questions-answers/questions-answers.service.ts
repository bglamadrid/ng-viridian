import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { QuestionCrudInMemoryService } from 'src/app/services/in-memory/crud/question.crud.in-memory.service';
import { UserProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/user-profile.crud.in-memory.service';
import { Question } from 'src/models/entities/Question';
import { UserProfile } from 'src/models/entities/UserProfile';
import { QuestionFilters } from './QuestionFilters';
import { QuestionDialogData } from 'src/app/dialogs/question-dialog/QuestionDialogData';
import { QuestionDialogComponent } from 'src/app/dialogs/question-dialog/question-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class QuestionsAnswersService
  implements OnDestroy {

  protected questionsArray: Question[];
  public questionsSource: Subject<Question[]>;
  public filters: Partial<QuestionFilters>;

  public get questions(): Question[] {
    return this.questionsArray;
  }
  public set questions(questions: Question[]) {

    this.questionsArray = questions;
    this.questionsSource.next(questions);
  }

  public get users$(): Observable<UserProfile[]> {
    return this.usersData.readAll();
  }

  constructor(
    protected data: QuestionCrudInMemoryService,
    protected usersData: UserProfileCrudInMemoryService,
    protected dialogs: MatDialog
  ) {
    this.questionsArray = [];
    this.questionsSource = new BehaviorSubject(this.questionsArray);
    this.filters = {};
  }

  ngOnDestroy(): void {
    this.questionsSource.complete();
  }

  public reloadQuestions(): void {
    const noFilters = (JSON.stringify(this.filters) === '{}');
    const query: Observable<Question[]> = noFilters ? this.data.readAll() : this.data.readFiltered(this.filters);

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

  public openQuestionDialogFor(dvc: Question): Observable<Question> {
    const dialogData: QuestionDialogData = {
      svc: this,
      question: dvc ? dvc : null
    };
    const dialog = this.dialogs.open(
      QuestionDialogComponent,
      {
        width: '60em',
        height: '30em',
        panelClass: [ 'no-padding' ],
        data: dialogData
      }
    );

    return dialog.afterClosed();
  }

}
