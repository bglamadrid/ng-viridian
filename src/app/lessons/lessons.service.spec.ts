import { TestBed } from '@angular/core/testing';

import { LessonsService } from './lessons.service';

describe('LessonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonsService = TestBed.get(LessonsService);
    expect(service).toBeTruthy();
  });
});
