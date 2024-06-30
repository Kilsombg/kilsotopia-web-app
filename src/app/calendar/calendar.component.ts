import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../day/day.model';
import { DayService } from '../day/day.service';
import { DayHelper } from '../helpers/day.helper';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  month: Day[] = [];
  notes: Day[] = [];

  weekDays: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    for (let i = 0; i < 31; i++)
      this.month.push(this.dayService.createDay(i));

    this.dayService.getNotes()
      .subscribe(value => {
        this.notes = DayHelper.transformDayArray(value);
        this.setNotes(value);
      });
  }

  onCLick(day: Day) {
    this.dayService.setSelectedDay(day);
    this.dayService.openDialog(day);
  }

  setNotes(notes: Day[]): void {
    notes.forEach(note => {
      this.month.forEach(day => {
        if (note.date.getDate() === day.date.getDate() &&
          note.date.getMonth() === day.date.getMonth() &&
          note.date.getFullYear() === day.date.getFullYear()) {
          day.notes = note.notes;
        }
      })
    });
  }
}

