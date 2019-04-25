import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPvComponent } from './edit-pv.component';

describe('EditPvComponent', () => {
  let component: EditPvComponent;
  let fixture: ComponentFixture<EditPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
