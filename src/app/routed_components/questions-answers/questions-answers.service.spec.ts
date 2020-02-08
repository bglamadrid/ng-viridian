import { TestBed } from '@angular/core/testing';

import { QuestionsAnswersService } from './questions-answers.service';

describe('QuestionsAnswersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsAnswersService = TestBed.get(QuestionsAnswersService);
    expect(service).toBeTruthy();
  });
});
