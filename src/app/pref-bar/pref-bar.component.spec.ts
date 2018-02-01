import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefBarComponent } from './pref-bar.component';

describe('PrefBarComponent', () => {
  let component: PrefBarComponent;
  let fixture: ComponentFixture<PrefBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
