import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSolicitudPComponent } from './agregar-solicitud-p.component';

describe('AgregarSolicitudPComponent', () => {
  let component: AgregarSolicitudPComponent;
  let fixture: ComponentFixture<AgregarSolicitudPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSolicitudPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSolicitudPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
