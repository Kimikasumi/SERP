import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalFinanzasComponent } from './principal-finanzas.component';

describe('PrincipalFinanzasComponent', () => {
  let component: PrincipalFinanzasComponent;
  let fixture: ComponentFixture<PrincipalFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});