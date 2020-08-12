import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNewThreadFormComponent } from './forum-new-thread-form.component';

describe('ForumThreadFormComponent', () => {
  let component: ForumNewThreadFormComponent;
  let fixture: ComponentFixture<ForumNewThreadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumNewThreadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNewThreadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
