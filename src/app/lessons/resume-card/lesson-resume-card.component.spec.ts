import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonResumeCardComponent } from './lesson-resume-card.component';

describe('LessonResumeCardComponent', () => {
  let component: LessonResumeCardComponent;
  let fixture: ComponentFixture<LessonResumeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonResumeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonResumeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
