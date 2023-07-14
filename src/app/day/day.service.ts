import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Day } from "./day.model";

@Injectable()
export class DayService {
    tempDate : Day = this.createDay(new Date(2021,0,5));
    selectedDay : Subject<Day> = new BehaviorSubject<Day>(this.tempDate);

    setSelectedDay(newDay : Day) {
        newDay.isSelected = true;
        console.log("previous: ",this.selectedDay.asObservable());
        this.selectedDay.subscribe()
        this.selectedDay.next(newDay);
        console.log("current: ",this.selectedDay.asObservable());
    }frefer;

    createDay(date: Date) : Day {
        return new Day(date);
    }
}