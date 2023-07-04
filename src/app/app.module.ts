import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { DayService } from './day/day.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
