import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Day } from '../day/day.model';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.css']
})
export class DayDialogComponent {
  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<DayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
}
