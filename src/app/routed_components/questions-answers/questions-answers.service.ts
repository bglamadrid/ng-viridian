import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { QuestionCrudInMemoryService } from 'src/app/services/in-memory/crud/question.crud.in-memory.service';
import { UserProfileCrudInMemoryService } from 'src/app/services/in-memory/crud/user-profile.crud.in-memory.service';
import { Question } from 'src/models/entities/Question';
import { UserProfile } from 'src/models/entities/UserProfile';

@Injectable()
export class QuestionsAnswersService
  implements OnDestroy {

  protected questionsArray: Question[];
  public questionsSource: Subject<Question[]>;

  public get questions(): Question[] {
    return this.questionsArray;
  }
  public set questions(devices: Question[]) {
    this.questionsArray = devices;
    this.questionsSource.next(devices);
  }

  public get users(): Observable<UserProfile[]> {
    return this.usersData.readAll();
  }

  constructor(
    protected data: QuestionCrudInMemoryService,
    protected usersData: UserProfileCrudInMemoryService
  ) {
    this.questionsArray = [];
    this.questionsSource = new BehaviorSubject(this.questionsArray);
  }

  ngOnDestroy(): void {
    this.questionsSource.complete();
  }

  public reloadQuestions(): void {
    this.data.readAll()
    .pipe(
      catchError(() => []),
      retry(1)
    ).subscribe(
      (items: Question[]) => {
        if (items) {
          this.questions = items;
        }
      }
    );
  }

}
