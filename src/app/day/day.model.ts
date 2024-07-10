import { DayType } from "./day-type";

export class Day {
    date: Date;
    notes: String ="";
    dayType: DayType = DayType.NORMAL;
    id: number;

    constructor(date: Date) {
        this.date = date;
    }
}