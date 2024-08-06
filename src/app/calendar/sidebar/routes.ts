import { Routes } from "@angular/router";
import { CalendarComponent } from "../calendar.component";
import { NotImplementedComponent } from "../../not-implemented/not-implemented.component";

export const routes: Routes = [
    {path:'', redirectTo:'calendar', pathMatch:'full'},
    { path: 'calendar', component: CalendarComponent },
    {path: 'notes', component: NotImplementedComponent}
];