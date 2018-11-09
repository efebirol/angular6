import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineventbindingComponent } from './meineventbinding.component';

describe('MeineventbindingComponent', () => {
  let component: MeineventbindingComponent;
  let fixture: ComponentFixture<MeineventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeineventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeineventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
