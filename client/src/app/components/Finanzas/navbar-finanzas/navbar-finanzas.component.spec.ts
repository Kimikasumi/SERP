import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFinanzasComponent } from './navbar-finanzas.component';

describe('NavbarFinanzasComponent', () => {
  let component: NavbarFinanzasComponent;
  let fixture: ComponentFixture<NavbarFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});