import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { Http } from '@angular/http';

@Injectable()
export class CalendarEventsListService {

  constructor(private http: Http) { }

  getCalendarEventsList() {
    const calendarUrl = 'https://www.googleapis.com/calendar/v3/calendars/jnt7jkmoinp7monnn90pqkc26o@group.calendar.google.com/events';
    const key = 'AIzaSyCG2ecf-k8270cLlWrR6meakB6yAN1u8w4';
    const params = new URLSearchParams();
    params.set('key', key);
    
    return this.http.get(calendarUrl, {search: params});
  }

}
