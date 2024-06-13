import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, map } from "rxjs";
import { Day } from "./day.model";

@Injectable()
export class DayService {
    setSelectedDay(newDay: Day): void {
        newDay.isSelected = !newDay.isSelected;
    }

    createDay(date: Date): Day {
        return new Day(date);
    }
}