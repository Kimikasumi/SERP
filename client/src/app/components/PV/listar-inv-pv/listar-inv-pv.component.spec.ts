import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInvPvComponent } from './listar-inv-pv.component';

describe('ListarInvPvComponent', () => {
  let component: ListarInvPvComponent;
  let fixture: ComponentFixture<ListarInvPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarInvPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarInvPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
