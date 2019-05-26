import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoTotalFinanzasComponent } from './presupuesto-total-finanzas.component';

describe('PresupuestoTotalFinanzasComponent', () => {
  let component: PresupuestoTotalFinanzasComponent;
  let fixture: ComponentFixture<PresupuestoTotalFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoTotalFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoTotalFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
