import { Component, Input } from '@angular/core';
import { Day } from '../day/day.model';
import { DayService } from '../day/day.service';

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

constructor(private dayService : DayService) {
}

onCLick(day:Day) {
  this.dayService.setSelectedDay(day);
}
}

