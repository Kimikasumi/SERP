import { TestBed } from '@angular/core/testing';

import { SolicitudService } from './solicitudP.service';

describe('SolicitudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitudService = TestBed.get(SolicitudService);
    expect(service).toBeTruthy();
  });
});
