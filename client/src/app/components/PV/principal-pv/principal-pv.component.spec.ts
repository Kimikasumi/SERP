import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPvComponent } from './principal-pv.component';

describe('PrincipalPvComponent', () => {
  let component: PrincipalPvComponent;
  let fixture: ComponentFixture<PrincipalPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
