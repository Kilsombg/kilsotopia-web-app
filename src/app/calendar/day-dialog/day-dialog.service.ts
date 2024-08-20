import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DayDialogComponent } from "./day-dialog.component";
import { cloneDeep } from 'lodash';
import { HTTPService } from "src/app/services/http.service";
import { Day } from "../day/day.model";
import { DateHelper } from "src/app/helpers/date.helper";
import { DayType } from "../day/day-type";
import { CalendarService } from "../calendar/calendar.service";

@Injectable()
export class DayDialogService {

    constructor(
        private dialog: MatDialog,
        private calendarService: CalendarService,
        private httpService: HTTPService
    ) { }

    openDialog(day: Day): void {
        let dc = this.getDialogConfig(day);

        const dialogRef = this.dialog.open(DayDialogComponent, dc);

        this.resolveClosing(dialogRef, day);
    }

    getDialogConfig(data: any): MatDialogConfig {
        let dc = new MatDialogConfig();

        dc.width = '800px';
        dc.height = '600px';
        dc.data = cloneDeep(data);

        return dc;
    }

    resolveClosing(dialogRef: MatDialogRef<DayDialogComponent, any>, day: Day) {
        dialogRef.afterClosed().subscribe(result => {
            console.log("The dialog is closed");

            this.calendarService.setDayType(day);

            if (result !== undefined) {
                this.resolve(result, day);
            }
        })
    }

    resolve(result: string, day: Day) {
        if (day.notes === "" || day.notes === null) {
            day.notes = result;
            this.httpService.insertNote(day).subscribe(id => {
                console.log("Inserted note with id: " + id);
                day.id = id;
            });
        } else if (result !== "" && result !== day.notes) {
            day.notes = result;
            this.httpService.updateNote(day).subscribe();
        } else {
            this.httpService.deleteNote(day.id).subscribe(response => { day.notes = response; });
        }
    }
}

