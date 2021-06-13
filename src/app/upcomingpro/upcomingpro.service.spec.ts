import { TestBed, inject } from '@angular/core/testing';

import { UpcomingproService } from './upcomingpro.service';

describe('UpcomingproService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingproService]
    });
  });

  it('should be created', inject([UpcomingproService], (service: UpcomingproService) => {
    expect(service).toBeTruthy();
  }));
});
