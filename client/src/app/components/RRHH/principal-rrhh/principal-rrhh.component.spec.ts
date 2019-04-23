import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalRrhhComponent } from './principal-rrhh.component';

describe('PrincipalRrhhComponent', () => {
  let component: PrincipalRrhhComponent;
  let fixture: ComponentFixture<PrincipalRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
