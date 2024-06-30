import { Injectable } from "@angular/core";

@Injectable()
export class DayHelper {
    static transformDay(obj: any): any {
        if (obj.date !== undefined && obj.date !== null && typeof (obj.date) === 'string') {
            obj.date = new Date(obj.date);
        }

        return obj;
    }

    static transformDayArray(objArray: any[]): any[] {
        objArray.forEach(obj => {
            obj = this.transformDay(obj);
        });

        return objArray;
    }
}