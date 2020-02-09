import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LBL_AUTHOR, LBL_DATE_FROM, LBL_DATE_TO, LBL_NAME, LBL_QUESTION_FILTERS, LBL_UPDATE } from 'src/app/shared/i18/es/labels';
import { Question } from 'src/models/entities/Question';
import { UserProfile } from 'src/models/entities/UserProfile';
import { QuestionsAnswersService } from '../questions-answers.service';

@Component({
  selector: 'app-question-filters-card',
  templateUrl: './question-filters-card.component.html',
  styleUrls: [
    '../../../../assets/styles/filters-card.sass',
    './question-filters-card.component.sass'
  ]
})
export class QuestionFiltersCardComponent
  implements OnInit {

  public filterForm: FormGroup;
  public users$: Observable<UserProfile[]>;

  public get title() { return this.filterForm.get('title') as FormControl; }
  public get author() { return this.filterForm.get('author') as FormControl; }
  public get dateRangeFrom() { return this.filterForm.get('dateRangeFrom') as FormControl; }
  public get dateRangeTo() { return this.filterForm.get('dateRangeTo') as FormControl; }

  public get labelQuestionFilters(): string { return LBL_QUESTION_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }
  public get labelTitle(): string { return LBL_NAME; }
  public get labelAuthor(): string { return LBL_AUTHOR; }
  public get labelDateRangeFrom(): string { return LBL_DATE_FROM; }
  public get labelDateRangeTo(): string { return LBL_DATE_TO; }

  @Input() public set questionFilters(qt: Question) {
    if (qt.title) {
      this.title.setValue(qt.title);
    }
    if (qt.author) {
      this.author.setValue(qt.author.id);
    }
    if (qt.date) {
      this.dateRangeFrom.setValue(qt.date);
      this.dateRangeTo.setValue(qt.date);
    }
  }

  @Output() public filters: EventEmitter<Question>;

  constructor(
    protected fb: FormBuilder,
    protected svc: QuestionsAnswersService
  ) {
    this.filterForm = this.fb.group({
      title: [''],
      author: [null],
      dateRangeFrom: [null],
      dateRangeTo: [null]
    });

    this.filters = new EventEmitter();
  }

  protected emitFilters(f: any): void {
    const qt = new Question();
    if (f.title) {
      qt.title = f.title;
    }
    if (f.author) {
      qt.author = f.author;
    }
    if (f.date) {
      qt.date = f.date;
    }
    this.filters.emit(qt);
  }

  ngOnInit() {
    this.users$ = this.svc.users;

    this.filterForm.valueChanges.subscribe(
      f => {
        if (this.filterForm.touched || this.filterForm.dirty) {
          this.emitFilters(f);
        }
      }
    );
  }

}
