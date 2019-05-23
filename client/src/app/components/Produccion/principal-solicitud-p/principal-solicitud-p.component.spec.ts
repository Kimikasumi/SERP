import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSolicitudPComponent } from './principal-solicitud-p.component';

describe('PrincipalSolicitudPComponent', () => {
  let component: PrincipalSolicitudPComponent;
  let fixture: ComponentFixture<PrincipalSolicitudPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSolicitudPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSolicitudPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
