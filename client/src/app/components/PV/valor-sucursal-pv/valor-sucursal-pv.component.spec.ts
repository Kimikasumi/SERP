import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorSucursalPvComponent } from './valor-sucursal-pv.component';

describe('ValorSucursalPvComponent', () => {
  let component: ValorSucursalPvComponent;
  let fixture: ComponentFixture<ValorSucursalPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorSucursalPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorSucursalPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
