import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSRecibidasComponent } from './listar-srecibidas.component';

describe('ListarSRecibidasComponent', () => {
  let component: ListarSRecibidasComponent;
  let fixture: ComponentFixture<ListarSRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
