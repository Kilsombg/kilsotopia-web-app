import { Component } from '@angular/core';
import { DayService } from './day/day.service';
import { Day } from './day/day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendar-web-app';
  month : Day[] = [];

  constructor(dayService : DayService) {
    for(let i=1;i<31;i++)
      this.month.push(dayService.createDay(new Date(2021,0,i)));
  }
}
