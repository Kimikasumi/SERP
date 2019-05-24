import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentismoComponent } from './absentismo.component';

describe('AbsentismoComponent', () => {
  let component: AbsentismoComponent;
  let fixture: ComponentFixture<AbsentismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsentismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsentismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
