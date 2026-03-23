import { TestBed } from '@angular/core/testing';

import { UpdateCustService } from './update-cust.service';

describe('UpdateCustService', () => {
  let service: UpdateCustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
