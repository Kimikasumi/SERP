import { TestBed } from '@angular/core/testing';

import { RetailersService } from './retailers.service';

describe('RetailersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetailersService = TestBed.get(RetailersService);
    expect(service).toBeTruthy();
  });
});
