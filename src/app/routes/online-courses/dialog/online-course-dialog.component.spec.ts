import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourseDialogComponent } from './online-course-dialog.component';

describe('OnlineCourseDialogComponent', () => {
  let component: OnlineCourseDialogComponent;
  let fixture: ComponentFixture<OnlineCourseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineCourseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
