import { TestBed } from '@angular/core/testing';

import { ProduccionService } from './produccion.service';

describe('ProduccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduccionService = TestBed.get(ProduccionService);
    expect(service).toBeTruthy();
  });
});
