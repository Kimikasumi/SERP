import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardProdComponent } from './dash-board-prod.component';

describe('DashBoardProdComponent', () => {
  let component: DashBoardProdComponent;
  let fixture: ComponentFixture<DashBoardProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
