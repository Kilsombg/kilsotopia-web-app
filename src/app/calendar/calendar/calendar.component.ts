import { Component, OnInit } from '@angular/core';
import { Day } from '../day/day.model';
import { DayHelper } from '../helpers/day.helper';
import { DayType } from '../day/day-type';
import { DateHelper } from '../../helpers/date.helper';
import { DayDialogService } from '../day-dialog/day-dialog.service';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayType = DayType;
  calendarDays: Day[] = [];
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

  constructor(
    private calendarService: CalendarService,
    private dayDialogService: DayDialogService
  ) { }

  ngOnInit(): void {
    this.initializeDays();

    this.subscribeToNotes();
  }

  subscribeToNotes() {
    this.calendarService.getNotes()
      .subscribe(value => {
        this.notes = DayHelper.transformDayArray(value);
        this.setNotes(value);
      });
  }

  initializeDays() {
    this.calendarDays = this.calendarService.getCalendarDays();

    this.setCalendarDayTypes();
  }

  setCalendarDayTypes() {
    this.calendarDays.forEach(day => {
      this.calendarService.setDayType(day);
    });
  }

  onCLick(day: Day) {
    this.calendarService.setSelectedDay(day);
    this.dayDialogService.openDialog(day);
  }

  setNotes(notes: Day[]): void {
    notes.forEach(note => {
      this.calendarDays.forEach(day => {
        if (DateHelper.checkEquality(note.date, day.date)) {
          day.notes = note.notes;
          day.id = note.id;
        }
      })
    });
  }
}

