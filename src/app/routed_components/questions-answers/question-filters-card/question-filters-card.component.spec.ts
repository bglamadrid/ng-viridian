import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFiltersCardComponent } from './question-filters-card.component';

describe('QuestionFiltersCardComponent', () => {
  let component: QuestionFiltersCardComponent;
  let fixture: ComponentFixture<QuestionFiltersCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFiltersCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFiltersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
