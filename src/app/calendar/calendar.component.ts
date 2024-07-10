import { Component, Input, OnInit } from '@angular/core';
import { Day } from '../day/day.model';
import { DayService } from '../day/day.service';
import { DayHelper } from '../helpers/day.helper';
import { DayDialogService } from '../day-dialog/day-dialog.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarDays: Day[] = [];
  notes: Day[] = [];
  monthOffset: number = 0;
  yearOffset: number = 0;
  currentMonth: number;
  currentYear: number;

  weekDays: string[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  constructor(
    private dayService: DayService,
    private dayDialogService: DayDialogService
  ) {
    this.initialize();
  }

  ngOnInit(): void {
    this.calendarDays = this.dayService.getCalendarDays(this.currentMonth + this.monthOffset, this.currentYear + this.yearOffset);

    this.dayService.getNotes()
      .subscribe(value => {
        this.notes = DayHelper.transformDayArray(value);
        this.setNotes(value);
      });
  }

  initialize() {
    var currentDate = new Date(Date.now());

    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
  }

  onCLick(day: Day) {
    this.dayService.setSelectedDay(day);
    this.dayDialogService.openDialog(day);
  }

  setNotes(notes: Day[]): void {
    notes.forEach(note => {
      this.calendarDays.forEach(day => {
        if (note.date.getDate() === day.date.getDate() &&
          note.date.getMonth() === day.date.getMonth() &&
          note.date.getFullYear() === day.date.getFullYear()) {
          day.notes = note.notes;
          day.id = note.id;
        }
      })
    });
  }
}

