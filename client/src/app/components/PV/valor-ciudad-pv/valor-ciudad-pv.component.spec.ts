import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorCiudadPvComponent } from './valor-ciudad-pv.component';

describe('ValorCiudadPvComponent', () => {
  let component: ValorCiudadPvComponent;
  let fixture: ComponentFixture<ValorCiudadPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValorCiudadPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorCiudadPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
