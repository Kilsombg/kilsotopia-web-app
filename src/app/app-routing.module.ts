import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { CalendarWrapperComponent } from './calendar/calendar-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  {
    path: 'calendar', component: CalendarWrapperComponent,
    children: [
      { path: '', component: CalendarComponent },
      { path: 'notes', component: NotImplementedComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
