import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinpassingdatafromeventComponent } from './meinpassingdatafromevent.component';

describe('MeinpassingdatafromeventComponent', () => {
  let component: MeinpassingdatafromeventComponent;
  let fixture: ComponentFixture<MeinpassingdatafromeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeinpassingdatafromeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeinpassingdatafromeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
