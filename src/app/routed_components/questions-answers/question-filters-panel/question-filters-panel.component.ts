import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { LBL_AUTHOR, LBL_DATE_FROM, LBL_DATE_TO, LBL_QUESTION_FILTERS, LBL_UPDATE, LBL_TITLE } from 'src/app/shared/i18/es/labels';
import { UserProfile } from 'src/models/entities/UserProfile';
import { QuestionsAnswersService } from '../questions-answers.service';
import { QuestionFilters } from '../QuestionFilters';

@Component({
  selector: 'app-question-filters-panel',
  templateUrl: './question-filters-panel.component.html',
  styleUrls: [
    '../../../../assets/styles/filters-panel.sass',
    './question-filters-panel.component.sass'
  ]
})
export class QuestionFiltersPanelComponent
  implements OnInit {

  public filterForm: FormGroup;
  public users$: Observable<UserProfile[]>;

  public get title() { return this.filterForm.get('title') as FormControl; }
  public get author() { return this.filterForm.get('author') as FormControl; }
  public get dateRangeFrom() { return this.filterForm.get('dateRangeFrom') as FormControl; }
  public get dateRangeTo() { return this.filterForm.get('dateRangeTo') as FormControl; }

  public get labelQuestionFilters(): string { return LBL_QUESTION_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }
  public get labelTitle(): string { return LBL_TITLE; }
  public get labelAuthor(): string { return LBL_AUTHOR; }
  public get labelDateRangeFrom(): string { return LBL_DATE_FROM; }
  public get labelDateRangeTo(): string { return LBL_DATE_TO; }

  @Input() public set questionFilters(qt: QuestionFilters) {
    if (qt.title) {
      this.title.setValue(qt.title);
    }
    if (qt.author) {
      this.author.setValue(qt.author);
    }
    if (qt.dateRangeFrom) {
      this.dateRangeFrom.setValue(qt.dateRangeFrom);
    }
    if (qt.dateRangeTo) {
      this.dateRangeTo.setValue(qt.dateRangeTo);
    }
  }

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
  }

  ngOnInit() {
    this.users$ = this.svc.users$;
  }

  public submitFilters(): void {
    const filters: Partial<QuestionFilters> = {};
    if (this.title.value) { filters.title = this.title.value; }
    if (this.author.value) { filters.author = this.author.value; }
    if (this.dateRangeFrom.value) { filters.dateRangeFrom = this.dateRangeFrom.value; }
    if (this.dateRangeTo.value) { filters.dateRangeTo = this.dateRangeTo.value; }

    if (JSON.stringify(this.svc.filters) !== JSON.stringify(filters)) {
      this.svc.filters = filters;
      this.svc.reloadQuestions();
    }
  }

}
