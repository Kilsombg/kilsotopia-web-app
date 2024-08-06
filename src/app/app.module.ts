import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './calendar/sidebar/routes';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './services/http.service';
import { DateHelper } from './helpers/date.helper';
import { CalendarModule } from './calendar/calendar.module';
@NgModule({
  declarations: [
    AppComponent,
    NotImplementedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule
  ],
  exports:[
    NotImplementedComponent
  ],
  providers: [
    HTTPService,
    DateHelper,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
