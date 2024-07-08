import { Observable, map } from "rxjs";
import { Day } from "../day/day.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HTTPService {

    private calendarDataUrl: string = "https://localhost:7182/api";

    constructor(private http: HttpClient) { }

    public getNotes(): Observable<any> {
        return this.http.get(this.calendarDataUrl + "/note");
    }

    public insertNote(day: Day): Observable<any> {
        return this.http.post(this.calendarDataUrl, day);
    }

    public updateNote(day: Day): Observable<any> {
        return this.http.put(this.calendarDataUrl + "/" + day.id, day.notes);
    }
}