import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadReplyFormComponent } from './forum-thread-reply-form.component';

describe('ForumReplyFormComponent', () => {
  let component: ForumThreadReplyFormComponent;
  let fixture: ComponentFixture<ForumThreadReplyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadReplyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
