import { TestBed } from '@angular/core/testing';

import { ForumService } from './forum.service';

describe('QuestionsAnswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForumService = TestBed.get(ForumService);
    expect(service).toBeTruthy();
  });
});
