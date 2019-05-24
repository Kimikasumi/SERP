import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FporArea } from './FporArea.component';

describe('FporArea', () => {
  let component: FporArea;
  let fixture: ComponentFixture<FporArea>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FporArea ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FporArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
