import { CdkDragStart, Point } from '@angular/cdk/drag-drop';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-day-dialog',
  templateUrl: './day-dialog.component.html',
  styleUrls: ['./day-dialog.component.css']
})
export class DayDialogComponent {
  public Editor = ClassicEditor;
  start: DOMRect;
  userPointerFirstPosition: Point;
  constrainTopY: number = 27.5;

  constructor(
    public dialogRef: MatDialogRef<DayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onBackClick(): void {
    this.dialogRef.close();
  }

  dragStarted(event: CdkDragStart) {
    this.start = event.source.element.nativeElement.getBoundingClientRect();
    this.userPointerFirstPosition = { x: 0, y: 0 };
  }

  computeDragRenderPos(pos: Point) {
    if (this.userPointerFirstPosition.x === 0) {
      this.userPointerFirstPosition = { x: pos.x, y: pos.y };
    }

    var renderPosition = {
      x: this.start.x + (pos.x - this.userPointerFirstPosition.x),
      y: this.start.y + (pos.y - this.userPointerFirstPosition.y)
    }

    if (renderPosition.y < this.constrainTopY) {
      renderPosition.y = this.constrainTopY;
    }

    return renderPosition;
  }
}
