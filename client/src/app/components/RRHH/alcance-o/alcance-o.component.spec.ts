import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcanceOComponent } from './alcance-o.component';

describe('AlcanceOComponent', () => {
  let component: AlcanceOComponent;
  let fixture: ComponentFixture<AlcanceOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcanceOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcanceOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
