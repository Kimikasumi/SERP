import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRrhhComponent } from './dashboard-rrhh.component';

describe('DashboardRrhhComponent', () => {
  let component: DashboardRrhhComponent;
  let fixture: ComponentFixture<DashboardRrhhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRrhhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
