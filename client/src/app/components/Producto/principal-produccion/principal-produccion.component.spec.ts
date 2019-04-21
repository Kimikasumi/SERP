import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalProduccionComponent } from './principal-produccion.component';

describe('PrincipalProduccionComponent', () => {
  let component: PrincipalProduccionComponent;
  let fixture: ComponentFixture<PrincipalProduccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalProduccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalProduccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
