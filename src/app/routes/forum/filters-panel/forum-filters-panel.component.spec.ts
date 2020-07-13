import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumFiltersPanelComponent } from './forum-filters-panel.component';

describe('ForumFiltersPanelComponent', () => {
  let component: ForumFiltersPanelComponent;
  let fixture: ComponentFixture<ForumFiltersPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumFiltersPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumFiltersPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
