import { Injectable } from "@angular/core";
import { Day } from "../day/day.model";
import { Observable } from "rxjs";
import { HTTPService } from "src/app/shared/services/http.service";
import { DayType } from "../day/day-type";
import { DateHelper } from "src/app/shared/helpers/date.helper";

@Injectable()
export class CalendarService {
    private monthOffset: number = 0;
    private yearOffset: number = 0;
    private currentMonth: number;
    private currentYear: number;

    constructor(private httpService: HTTPService) {
        var currentDate = new Date(Date.now());

        this.currentMonth = currentDate.getMonth();
        this.currentYear = currentDate.getFullYear();
    }

    public getCurrentMonth(): number {
        return this.currentMonth;
    }

    public getCurrentYear(): number {
        return this.currentYear;
    }

    public getCalendarMonth(): number {
        return this.currentMonth + this.monthOffset;
    }

    public getCalendarYear(): number {
        return this.currentYear + this.yearOffset;
    }

    public getCalendarDays(): Day[] {
        var month = this.getCalendarMonth();
        var year = this.getCalendarYear();
        var startDay: Date = this.getBeginningDayOfCalendar(month, year);

        return this.getCalendarDaysByStartDay(startDay);
    }

    public getCalendarDaysByStartDay(startDay: Date): Day[] {
        var calendarDays: Day[] = [];
        var day: Day;

        for (let i = 0; i < 35; i++) {
            day = new Day(DateHelper.getDateOffset(startDay, i));
            calendarDays.push(day);
        }

        return calendarDays;
    }

    public getBeginningDayOfCalendar(month: number, year: number): Date {
        month += 1; // getMonth() is 0 based

        var date = new Date(year + '-' + month + '-' + '01' + " 00:00:00");

        date.setDate(date.getDate() - date.getDay() + 1);

        return date;
    }

    public getNotes(): Observable<Day[]> {
        return this.httpService.getNotes();
    }

    public setSelectedDay(newDay: Day): void {
        newDay.dayType = DayType.SELECTED;
    }

    public setDayType(day: Day): void {
        if (DateHelper.checkCurrentDate(day.date)) {
            day.dayType = DayType.CURRENT;
        } else if (day.date.getMonth() !== this.currentMonth) {
            day.dayType = DayType.OUTSIDE;
        } else {
            day.dayType = DayType.NORMAL;
        }
    }
}