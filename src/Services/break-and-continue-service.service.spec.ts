import { TestBed } from '@angular/core/testing';

import { BreakAndContinueServiceService } from './break-and-continue-service.service';

describe('BreakAndContinueServiceService', () => {
  let service: BreakAndContinueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakAndContinueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
