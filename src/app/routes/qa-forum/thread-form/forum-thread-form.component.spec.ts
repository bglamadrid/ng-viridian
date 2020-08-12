import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadFormComponent } from './forum-thread-form.component';

describe('ForumThreadFormComponent', () => {
  let component: ForumThreadFormComponent;
  let fixture: ComponentFixture<ForumThreadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
