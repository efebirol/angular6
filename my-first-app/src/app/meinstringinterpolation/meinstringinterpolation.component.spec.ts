import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinstringinterpolationComponent } from './meinstringinterpolation.component';

describe('MeinstringinterpolationComponent', () => {
  let component: MeinstringinterpolationComponent;
  let fixture: ComponentFixture<MeinstringinterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeinstringinterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinstringinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
