import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/models/entities/UserProfile';
import { LBL_DEVICE_FILTERS, LBL_UPDATE, LBL_NAME, LBL_BRAND, LBL_TYPE } from 'src/app/shared/i18/es/labels';
import { Device } from 'src/models/entities/Device';
import { DeviceCatalogService } from '../../device-catalog/device-catalog.service';
import { QuestionsAnswersService } from '../questions-answers.service';

@Component({
  selector: 'app-question-filters-card',
  templateUrl: './question-filters-card.component.html',
  styleUrls: ['./question-filters-card.component.sass']
})
export class QuestionFiltersCardComponent
  implements OnInit {

  public filterForm: FormGroup;
  public users$: Observable<UserProfile[]>;

  public get title() { return this.filterForm.get('title') as FormControl; }
  public get author() { return this.filterForm.get('author') as FormControl; }
  public get dateRangeFrom() { return this.filterForm.get('dateRangeFrom') as FormControl; }
  public get dateRangeTo() { return this.filterForm.get('dateRangeTo') as FormControl; }

  public get labelQuestionFilters(): string { return LBL_DEVICE_FILTERS; }
  public get labelUpdateFilters(): string { return LBL_UPDATE; }
  public get labelName(): string { return LBL_NAME; }
  public get labelBrand(): string { return LBL_BRAND; }
  public get labelType(): string { return LBL_TYPE; }

  @Input() public set deviceFilters(dvc: Device) {
    if (dvc.brand) {
      this.author.setValue(dvc.brand.id);
    }
    if (dvc.deviceType) {
      this.dateRangeFrom.setValue(dvc.deviceType.id);
    }
  }

  constructor(
    protected fb: FormBuilder,
    protected svc: QuestionsAnswersService
  ) {
    this.filterForm = this.fb.group({
      name: [''],
      brand: [null],
      type: [null]
    });
  }

  ngOnInit() {
    this.users$ = this.svc.users;

  }

}
