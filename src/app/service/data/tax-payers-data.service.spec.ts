import { TestBed } from '@angular/core/testing';

import { TaxPayersDataService } from './tax-payers-data.service';

describe('TaxPayersDataService', () => {
  let service: TaxPayersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxPayersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
