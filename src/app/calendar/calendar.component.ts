import { Component, Input } from '@angular/core';
import { Day } from '../day/day.model';
import { DayService } from '../day/day.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  month : Day[] = [];

weekDays: string[] = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

constructor(private dayService : DayService) {
  for(let i=1;i<31;i++)
    this.month.push(this.dayService.createDay(new Date(2021,0,i)));
}

onCLick(day:Day) {
  this.dayService.setSelectedDay(day);
}
}

