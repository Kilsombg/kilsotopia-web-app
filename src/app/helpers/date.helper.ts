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

    static checkEquality(date1: Date, date2: Date): boolean {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    }

    static  checkCurrentDate(date: Date): boolean {
        return this.checkEquality(date, new Date(Date.now()));
    }
}