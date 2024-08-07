import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './services/http.service';
import { DateHelper } from './helpers/date.helper';
import { CalendarModule } from './calendar/calendar.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    NotImplementedComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    AppRoutingModule
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
