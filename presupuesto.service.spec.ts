import { TestBed } from '@angular/core/testing';

import { PresupuestoService } from './presupuesto.service';

describe('PresupuestoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresupuestoService = TestBed.get(PresupuestoService);
    expect(service).toBeTruthy();
  });
});
