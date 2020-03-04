import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadListComponent } from './forum-thread-list.component';

describe('ForumThreadListComponent', () => {
  let component: ForumThreadListComponent;
  let fixture: ComponentFixture<ForumThreadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
