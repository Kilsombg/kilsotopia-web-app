export class Day {
    date: Date;
    notes: String ="";
    isSelected: boolean = false;
    id: number;

    constructor(date: Date) {
        this.date = date;
    }
}