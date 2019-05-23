import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudPComponent } from './listar-solicitud-p.component';

describe('ListarSolicitudPComponent', () => {
  let component: ListarSolicitudPComponent;
  let fixture: ComponentFixture<ListarSolicitudPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitudPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
