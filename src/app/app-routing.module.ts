import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { CalendarWrapperComponent } from './calendar/calendar-wrapper.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'calendar', component: CalendarWrapperComponent,
    children: [
      { path: '', component: CalendarComponent },
      { path: 'notes', component: NotImplementedComponent }
    ]
  },
  { path: 'home', component: HomepageComponent },
  { path: 'others', component: NotImplementedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
