import { TestBed } from '@angular/core/testing';

import { MPrimaService } from './m-prima.service';

describe('MPrimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MPrimaService = TestBed.get(MPrimaService);
    expect(service).toBeTruthy();
  });
});
