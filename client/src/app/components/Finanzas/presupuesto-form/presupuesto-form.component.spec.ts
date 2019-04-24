import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoFormComponent } from './presupuesto-form.component';

describe('PresupuestoFormComponent', () => {
  let component: PresupuestoFormComponent;
  let fixture: ComponentFixture<PresupuestoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresupuestoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
