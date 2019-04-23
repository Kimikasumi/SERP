import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMPComponent } from './agregar-mp.component';

describe('AgregarMPComponent', () => {
  let component: AgregarMPComponent;
  let fixture: ComponentFixture<AgregarMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
