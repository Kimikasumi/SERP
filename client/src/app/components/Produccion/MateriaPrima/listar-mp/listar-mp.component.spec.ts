import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMPComponent } from './listar-mp.component';

describe('ListarMPComponent', () => {
  let component: ListarMPComponent;
  let fixture: ComponentFixture<ListarMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
