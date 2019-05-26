import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsGerenteComponent } from './dashboards-gerente.component';

describe('DashboardsGerenteComponent', () => {
  let component: DashboardsGerenteComponent;
  let fixture: ComponentFixture<DashboardsGerenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardsGerenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardsGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
