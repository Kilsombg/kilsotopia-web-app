import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, map } from "rxjs";
import { Day } from "./day.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DayDialogComponent } from "../day-dialog/day-dialog.component";

@Injectable()
export class DayService {

    constructor(public dialog: MatDialog) { }

    openDialog(day: Day) : void {
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

    createDay(date: Date): Day {
        return new Day(date);
    }
}