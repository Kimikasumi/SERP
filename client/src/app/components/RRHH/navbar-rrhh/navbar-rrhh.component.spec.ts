import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRrhhComponent } from './navbar-rrhh.component';

describe('NavbarRrhhComponent', () => {
  let component: NavbarRrhhComponent;
  let fixture: ComponentFixture<NavbarRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
