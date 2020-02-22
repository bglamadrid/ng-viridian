import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionReplyFormComponent } from './question-reply-form.component';

describe('QuestionReplyFormComponent', () => {
  let component: QuestionReplyFormComponent;
  let fixture: ComponentFixture<QuestionReplyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionReplyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
