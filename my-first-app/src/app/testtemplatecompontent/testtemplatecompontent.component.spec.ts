import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttemplatecompontentComponent } from './testtemplatecompontent.component';

describe('TesttemplatecompontentComponent', () => {
  let component: TesttemplatecompontentComponent;
  let fixture: ComponentFixture<TesttemplatecompontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttemplatecompontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttemplatecompontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
