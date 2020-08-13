import { TestBed } from '@angular/core/testing';

import { OnlineCoursesService } from './online-courses.service';

describe('OnlineCoursesService', () => {
  let service: OnlineCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
