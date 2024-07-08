import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Day } from "./day.model";
import { HTTPService } from "../services/http.service";

@Injectable()
export class DayService {

    constructor(private httpService: HTTPService) { }

    setSelectedDay(newDay: Day): void {
        newDay.isSelected = !newDay.isSelected;
    }

    createDay(index: number): Day {
        var date = new Date(Date.now() + (1000 * 60 * 60 * 24 * index));
        return new Day(date);
    }

    getNotes(): Observable<Day[]> {
        return this.httpService.getNotes();
    }
}