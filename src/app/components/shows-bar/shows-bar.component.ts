import { Component, OnInit } from '@angular/core';
import { CalendarEventsListService } from '../../services/calendar-events-list.service';

@Component({
  selector: 'app-shows-bar',
  templateUrl: './shows-bar.component.html',
  styleUrls: ['./shows-bar.component.css']
})
export class ShowsBarComponent implements OnInit {

  constructor(private calendarEventsListService: CalendarEventsListService) { }

  title = 'SHOWS';
  shows = [
    {
      date: '1/1/2017',
      place: 'Indiana University of PA'
    },
    {
      date: '1/4/2017',
      place: 'Club Cool Kids'
    },
    {
      date: '1/8/2017',
      place: 'Stage AE'
    }];

  ngOnInit() {
    this.calendarEventsListService.getCalendarEventsList()
      .subscribe((resp) => {
      console.log('calendar response: ', resp);
    });
  }

}
