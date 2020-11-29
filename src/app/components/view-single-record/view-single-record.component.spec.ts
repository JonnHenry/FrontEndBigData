import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleRecordComponent } from './view-single-record.component';

describe('ViewSingleRecordComponent', () => {
  let component: ViewSingleRecordComponent;
  let fixture: ComponentFixture<ViewSingleRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
