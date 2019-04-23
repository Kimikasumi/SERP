import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFuncionarioComponent } from './form-funcionario.component';

describe('FormFuncionarioComponent', () => {
  let component: FormFuncionarioComponent;
  let fixture: ComponentFixture<FormFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
