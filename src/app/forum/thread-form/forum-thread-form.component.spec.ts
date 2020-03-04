import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadFormComponent } from './forum-thread-form.component';

describe('ThreadFormComponent', () => {
  let component: ThreadFormComponent;
  let fixture: ComponentFixture<ThreadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
