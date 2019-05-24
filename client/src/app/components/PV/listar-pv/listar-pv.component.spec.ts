import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPvComponent } from './listar-pv.component';

describe('ListarPvComponent', () => {
  let component: ListarPvComponent;
  let fixture: ComponentFixture<ListarPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
