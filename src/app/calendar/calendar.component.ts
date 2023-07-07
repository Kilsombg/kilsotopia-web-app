import { Component, Input } from '@angular/core';
import { Day } from '../day/day.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
@Input() month : Day[];

weekDays: string[] = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun'
];

onCLick(day:Day) {
  console.log(day.date);
}
}
