import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { Day } from "../day/day.model";
import { DayDialogComponent } from "./day-dialog.component";
import { cloneDeep } from 'lodash';

@Injectable()
export class DayDialogService {

    constructor(private dialog: MatDialog) { }

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
            if (result !== undefined) { day.notes = result; }
            day.isSelected = false;
        })
    }
}