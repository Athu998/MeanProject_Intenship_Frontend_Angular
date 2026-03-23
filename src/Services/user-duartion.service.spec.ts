import { TestBed } from '@angular/core/testing';

import { UserDuartionService } from './user-duartion.service';

describe('UserDuartionService', () => {
  let service: UserDuartionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDuartionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
