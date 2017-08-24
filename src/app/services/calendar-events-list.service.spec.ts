import { TestBed, inject } from '@angular/core/testing';

import { CalendarEventsListService } from './calendar-events-list.service';

describe('CalendarEventsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarEventsListService]
    });
  });

  it('should be created', inject([CalendarEventsListService], (service: CalendarEventsListService) => {
    expect(service).toBeTruthy();
  }));
});
