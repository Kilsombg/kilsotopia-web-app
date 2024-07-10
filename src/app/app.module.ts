import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { DayService } from './day/day.service';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DayDialogComponent } from './day-dialog/day-dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NavigationBarComponent } from './navigation-bar/navigaiton-bar.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './navigation-bar/routes';
import { HttpClientModule } from '@angular/common/http';
import { HTTPService } from './services/http.service';
import { DayHelper } from './helpers/day.helper';
import { DayDialogService } from './day-dialog/day-dialog.service';
import { DateHelper } from './helpers/date.helper';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    NavigationBarComponent,
    DayDialogComponent,
    NotImplementedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    CKEditorModule,
    HttpClientModule
  ],
  providers: [
    DayService,
    HTTPService,
    DayHelper,
    DateHelper,
    DayDialogService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
