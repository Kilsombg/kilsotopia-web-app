import { NgModule } from '@angular/core';
import { DayComponent } from './day/day.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DayDialogComponent } from './day-dialog/day-dialog.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DayHelper } from './helpers/day.helper';
import { DayDialogService } from './day-dialog/day-dialog.service';
import { CommonModule } from '@angular/common';
import { CalendarWrapperComponent } from './calendar-wrapper.component';
import { SidebarService } from './sidebar/sidebar.service';
import { CalendarService } from './calendar/calendar.service';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CalendarComponent,
    DayComponent,
    SidebarComponent,
    DayDialogComponent,
    CalendarWrapperComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    SharedModule,
    DragDropModule
  ],
  providers: [
    DayHelper,
    CalendarService,
    DayDialogService,
    SidebarService
  ],
  bootstrap: []
})
export class CalendarModule { }
