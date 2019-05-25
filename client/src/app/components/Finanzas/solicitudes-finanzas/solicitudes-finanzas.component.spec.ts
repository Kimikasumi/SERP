import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesFinanzasComponent } from './solicitudes-finanzas.component';

describe('SolicitudesFinanzasComponent', () => {
  let component: SolicitudesFinanzasComponent;
  let fixture: ComponentFixture<SolicitudesFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
