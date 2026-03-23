import { TestBed } from '@angular/core/testing';

import { DeptInfoServiceService } from './dept-info-service.service';

describe('DeptInfoServiceService', () => {
  let service: DeptInfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptInfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
