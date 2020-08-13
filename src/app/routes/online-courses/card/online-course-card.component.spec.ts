import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseCardComponent } from './online-course-card.component';

describe('OnlineCourseCardComponent', () => {
  let component: OnlineCourseCardComponent;
  let fixture: ComponentFixture<OnlineCourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
