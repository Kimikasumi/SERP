import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinanzasComponent } from './add-finanzas.component';

describe('AddFinanzasComponent', () => {
  let component: AddFinanzasComponent;
  let fixture: ComponentFixture<AddFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});