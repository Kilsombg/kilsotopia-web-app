import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './shared/services/http.service';
import { DateHelper } from './shared/helpers/date.helper';
import { CalendarModule } from './calendar/calendar.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageModule } from './homepage/homepage.module';
import { RoutingService } from './shared/services/routing.service';
import { NavigationService } from './shared/services/navigation.service';
import { LocationService } from './shared/services/location.service';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    AppRoutingModule,
    HomepageModule
  ],
  providers: [
    HTTPService,
    RoutingService,
    NavigationService,
    LocationService,
    DateHelper,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
