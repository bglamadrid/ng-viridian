import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumThreadDialogComponent } from './forum-thread-dialog.component';

describe('ForumThreadDialogComponent', () => {
  let component: ForumThreadDialogComponent;
  let fixture: ComponentFixture<ForumThreadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumThreadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumThreadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
