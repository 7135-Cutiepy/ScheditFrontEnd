import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScheduleViewerComponent } from './single-schedule-viewer.component';

describe('SingleScheduleViewerComponent', () => {
  let component: SingleScheduleViewerComponent;
  let fixture: ComponentFixture<SingleScheduleViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleScheduleViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleScheduleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
