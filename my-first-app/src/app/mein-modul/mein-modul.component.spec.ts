import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinModulComponent } from './mein-modul.component';

describe('MeinModulComponent', () => {
  let component: MeinModulComponent;
  let fixture: ComponentFixture<MeinModulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeinModulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
