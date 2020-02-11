import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFiltersPanelComponent } from './question-filters-panel.component';

describe('QuestionFiltersPanelComponent', () => {
  let component: QuestionFiltersPanelComponent;
  let fixture: ComponentFixture<QuestionFiltersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionFiltersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
