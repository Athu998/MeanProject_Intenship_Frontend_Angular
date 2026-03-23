import { TestBed } from '@angular/core/testing';

import { UpdateEmpService } from './update-emp.service';

describe('UpdateEmpService', () => {
  let service: UpdateEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
