import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoAreasFinanzasComponent } from './presupuesto-areas-finanzas.component';

describe('PresupuestoAreasFinanzasComponent', () => {
  let component: PresupuestoAreasFinanzasComponent;
  let fixture: ComponentFixture<PresupuestoAreasFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoAreasFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoAreasFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
