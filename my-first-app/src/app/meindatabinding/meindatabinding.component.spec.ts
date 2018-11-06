import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeindatabindingComponent } from './meindatabinding.component';

describe('MeindatabindingComponent', () => {
  let component: MeindatabindingComponent;
  let fixture: ComponentFixture<MeindatabindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeindatabindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeindatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
