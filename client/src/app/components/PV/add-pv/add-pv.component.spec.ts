import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPvComponent } from './add-pv.component';

describe('AddPvComponent', () => {
  let component: AddPvComponent;
  let fixture: ComponentFixture<AddPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
