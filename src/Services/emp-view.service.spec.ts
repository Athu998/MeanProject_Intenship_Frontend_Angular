import { TestBed } from '@angular/core/testing';

import { EmpViewService } from './emp-view.service';

describe('EmpViewService', () => {
  let service: EmpViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
