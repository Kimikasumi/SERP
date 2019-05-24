import { TestBed } from '@angular/core/testing';

import { SolicitudInvService } from './solicitud-inv.service';

describe('SolicitudInvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudInvService = TestBed.get(SolicitudInvService);
    expect(service).toBeTruthy();
  });
});
