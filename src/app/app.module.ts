import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { DayService } from './day/day.service';
import { CommonModule } from '@angular/common';
import { AsyncPipeComponent } from './navigation_bar/navigaiton_bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    DayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
