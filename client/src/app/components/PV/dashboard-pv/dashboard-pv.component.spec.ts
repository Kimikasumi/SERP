import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPvComponent } from './dashboard-pv.component';

describe('DashboardPvComponent', () => {
  let component: DashboardPvComponent;
  let fixture: ComponentFixture<DashboardPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
