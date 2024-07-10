import { Injectable } from "@angular/core";

@Injectable()
export class DateHelper {
    static getDateOffset(date: Date, dayOffset: number = 0, monthOffset: number = 0, yearOffset: number = 0): Date {
        var offsetDate = new Date();
        offsetDate.setFullYear(date.getFullYear() + yearOffset);
        offsetDate.setMonth(date.getMonth() + monthOffset);
        offsetDate.setDate(date.getDate() + dayOffset);

        return offsetDate;
    }
}