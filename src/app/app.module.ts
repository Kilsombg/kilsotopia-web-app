import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { DayService } from './day/day.service';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigaiton-bar.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { RouterModule } from '@angular/router';
import { routes } from './navigation-bar/routes';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    NavigationBarComponent,
    NotImplementedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    DayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
