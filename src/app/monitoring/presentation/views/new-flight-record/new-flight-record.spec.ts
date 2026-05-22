import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightRecord } from './new-flight-record';

describe('NewFlightRecord', () => {
  let component: NewFlightRecord;
  let fixture: ComponentFixture<NewFlightRecord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFlightRecord],
    }).compileComponents();

    fixture = TestBed.createComponent(NewFlightRecord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
