import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadSucursalPvComponent } from './cantidad-sucursal-pv.component';

describe('CantidadSucursalPvComponent', () => {
  let component: CantidadSucursalPvComponent;
  let fixture: ComponentFixture<CantidadSucursalPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadSucursalPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadSucursalPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
