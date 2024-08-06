import { Observable } from "rxjs";
import { Day } from "../calendar/day/day.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HTTPService {
    private calendarDataApiUrl: string = "https://localhost:7182/api";
    private calendarNoteControllerUrl = this.calendarDataApiUrl + "/note";

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

    constructor(private http: HttpClient) { }

    public getNotes(): Observable<any> {
        return this.http.get(this.calendarNoteControllerUrl);
    }

    public insertNote(day: Day): Observable<any> {
        return this.http.post(this.calendarNoteControllerUrl, day);
    }

    public updateNote(day: Day): Observable<any> {
        return this.http.put(this.calendarNoteControllerUrl + "/" + day.id, JSON.stringify(day.notes), this.options);
    }

    deleteNote(id: number): Observable<any> {
        return this.http.delete(this.calendarNoteControllerUrl + "/" + id);
    }
}