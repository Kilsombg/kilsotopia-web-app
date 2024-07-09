import { Observable } from "rxjs";
import { Day } from "../day/day.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HTTPService {
    private calendarDataApiUrl: string = "https://localhost:7182/api";
    private calendarNoteControllerUrl = this.calendarDataApiUrl + "/note";

    constructor(private http: HttpClient) { }

    public getNotes(): Observable<any> {
        return this.http.get(this.calendarNoteControllerUrl);
    }

    public insertNote(day: Day): Observable<any> {
        return this.http.post(this.calendarDataApiUrl + "/note", day);
    }

    public updateNote(day: Day): Observable<any> {
        return this.http.put(this.calendarNoteControllerUrl + "/" + day.id, day.notes);
    }

    deleteNote(id: number): Observable<any> {
        return this.http.delete(this.calendarNoteControllerUrl + "/" + id);
    }
}