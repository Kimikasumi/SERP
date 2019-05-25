import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFinanzasComponent } from './dashboard-finanzas.component';

describe('DashboardFinanzasComponent', () => {
  let component: DashboardFinanzasComponent;
  let fixture: ComponentFixture<DashboardFinanzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFinanzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
