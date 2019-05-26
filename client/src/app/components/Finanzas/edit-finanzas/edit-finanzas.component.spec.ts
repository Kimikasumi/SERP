import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinanzasComponent } from './edit-finanzas.component';

describe('EditPvComponent', () => {
  let component: EditFinanzasComponent;
  let fixture: ComponentFixture<EditFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});