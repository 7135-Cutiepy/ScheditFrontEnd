import { TestBed, inject } from '@angular/core/testing';

import { CourseApiService } from './course-api.service';

describe('CourseApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseApiService]
    });
  });

  it('should be created', inject([CourseApiService], (service: CourseApiService) => {
    expect(service).toBeTruthy();
  }));
});
