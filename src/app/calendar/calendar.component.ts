import { Component, OnInit } from '@angular/core';
import { Day } from './day/day.model';
import { DayService } from './day/day.service';
import { DayHelper } from './helpers/day.helper';
import { DayType } from './day/day-type';
import { DateHelper } from '../helpers/date.helper';
import { DayDialogService } from './day-dialog/day-dialog.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayType = DayType;
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
    this.initializeProperties();
  }

  ngOnInit(): void {
    this.initializeDays();

    this.subscribeToNotes();
  }

  subscribeToNotes() {
    this.dayService.getNotes()
      .subscribe(value => {
        this.notes = DayHelper.transformDayArray(value);
        this.setNotes(value);
      });
  }

  initializeDays() {
    this.calendarDays = this.dayService.getCalendarDays(this.currentMonth + this.monthOffset, this.currentYear + this.yearOffset);

    this.setCalendarDayTypes();
  }

  setCalendarDayTypes() {
    this.calendarDays.forEach(day => {
      if(DateHelper.checkCurrentDate(day.date)){
        day.dayType = DayType.CURRENT;
      } else if(day.date.getMonth() !== this.currentMonth){
        day.dayType = DayType.OUTSIDE;
      }
    });
  }

  initializeProperties() {
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
        if (DateHelper.checkEquality(note.date, day.date)) {
          day.notes = note.notes;
          day.id = note.id;
        }
      })
    });
  }
}

