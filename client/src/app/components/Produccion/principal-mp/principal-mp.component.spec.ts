import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMPComponent } from './principal-mp.component';

describe('PrincipalMPComponent', () => {
  let component: PrincipalMPComponent;
  let fixture: ComponentFixture<PrincipalMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
