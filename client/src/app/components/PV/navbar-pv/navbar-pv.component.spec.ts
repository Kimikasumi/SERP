import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPvComponent } from './navbar-pv.component';

describe('NavbarPvComponent', () => {
  let component: NavbarPvComponent;
  let fixture: ComponentFixture<NavbarPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
