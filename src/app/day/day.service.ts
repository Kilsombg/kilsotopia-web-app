import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, map } from "rxjs";
import { Day } from "./day.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DayDialogComponent } from "../day-dialog/day-dialog.component";
import { HTTPService } from "../services/http.service";

@Injectable()
export class DayService {

    constructor(
        private dialog: MatDialog,
        private httpService: HTTPService
    ) { }

    openDialog(day: Day): void {
        let dc = new MatDialogConfig();
        dc.width = '800px';
        dc.height = '600px';
        dc.data = day;

        const dialogRef = this.dialog.open(DayDialogComponent, dc);

        dialogRef.afterClosed().subscribe(result => {
            console.log("The dialog is closed");
            day.notes = result;
            day.isSelected = false;
        })
    }

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