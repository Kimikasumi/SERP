import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFinanzasComponent } from './listar-finanzas.component';

describe('ListarFinanzasComponent', () => {
  let component: ListarFinanzasComponent;
  let fixture: ComponentFixture<ListarFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});