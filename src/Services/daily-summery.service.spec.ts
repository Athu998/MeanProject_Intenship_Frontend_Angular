import { TestBed } from '@angular/core/testing';

import { DailySummeryService } from './daily-summery.service';

describe('DailySummeryService', () => {
  let service: DailySummeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailySummeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
