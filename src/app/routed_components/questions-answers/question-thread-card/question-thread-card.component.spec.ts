import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreadCardComponent } from './question-thread-card.component';

describe('QuestionThreadCardComponent', () => {
  let component: QuestionThreadCardComponent;
  let fixture: ComponentFixture<QuestionThreadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionThreadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionThreadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
