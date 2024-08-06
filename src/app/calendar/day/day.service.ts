import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Day } from "./day.model";
import { HTTPService } from "../../services/http.service";
import { DateHelper } from "../../helpers/date.helper";
import { DayType } from "./day-type";

@Injectable()
export class DayService {
    constructor(private httpService: HTTPService) { }

    setSelectedDay(newDay: Day): void {
        newDay.dayType = DayType.SELECTED;
    }

    getCalendarDays(month: number, year: number): Day[] {
        var calendarDays: Day[] = [];
        var day: Day;
        var startDay: Date = this.getBeginningDayOfCalendar(month, year);

        for (let i = 0; i < 35; i++) {
            day = new Day(DateHelper.getDateOffset(startDay, i));
            calendarDays.push(day);
        }

        return calendarDays;
    }

    getBeginningDayOfCalendar(month: number, year: number): Date {
        month += 1; // getMonth() is 0 based

        var date = new Date(year + '-' + month + '-' + '01' + " 00:00:00");
        
        date.setDate(date.getDate() - date.getDay() + 1);

        return date;
    }

    getNotes(): Observable<Day[]> {
        return this.httpService.getNotes();
    }
}