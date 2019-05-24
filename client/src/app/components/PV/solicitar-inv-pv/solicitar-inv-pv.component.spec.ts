import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarInvPvComponent } from './solicitar-inv-pv.component';

describe('SolicitarInvPvComponent', () => {
  let component: SolicitarInvPvComponent;
  let fixture: ComponentFixture<SolicitarInvPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarInvPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarInvPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
