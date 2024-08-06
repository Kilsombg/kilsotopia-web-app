import { NgModule } from '@angular/core';
import { DayComponent } from './day/day.component';
import { DayService } from './day/day.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DayDialogComponent } from './day-dialog/day-dialog.component';
import { CalendarComponent } from './calendar.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DayHelper } from './helpers/day.helper';
import { DayDialogService } from './day-dialog/day-dialog.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CalendarComponent,
    DayComponent,
    SidebarComponent,
    DayDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DayHelper,
    DayService,
    DayDialogService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: []
})
export class CalendarModule { }
