import { TestBed } from '@angular/core/testing';

import { CustDataService } from './cust-data.service';

describe('CustDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustDataService = TestBed.get(CustDataService);
    expect(service).toBeTruthy();
  });
});
