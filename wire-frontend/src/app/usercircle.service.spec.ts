import { TestBed, inject } from '@angular/core/testing';

import { UsercircleService } from './usercircle.service';

describe('UsercircleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsercircleService]
    });
  });

  it('should be created', inject([UsercircleService], (service: UsercircleService) => {
    expect(service).toBeTruthy();
  }));
});
