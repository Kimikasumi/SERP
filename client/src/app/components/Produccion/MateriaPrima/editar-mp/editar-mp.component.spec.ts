import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMPComponent } from './editar-mp.component';

describe('EditarMPComponent', () => {
  let component: EditarMPComponent;
  let fixture: ComponentFixture<EditarMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
