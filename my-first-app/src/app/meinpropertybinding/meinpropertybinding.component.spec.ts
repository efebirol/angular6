import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinpropertybindingComponent } from './meinpropertybinding.component';

describe('MeinpropertybindingComponent', () => {
  let component: MeinpropertybindingComponent;
  let fixture: ComponentFixture<MeinpropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeinpropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinpropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
