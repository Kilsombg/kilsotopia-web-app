import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { NotificationComponent } from '../components/modals/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  dialogRef?: MatDialogRef<NotificationComponent>;

  constructor(private matDialog: MatDialog) { }

  showNotification(isSuccess: boolean, title: string, message: string) {
    const dc = new MatDialogConfig();
    dc.width = '480px';
    dc.height = '210px';
    dc.data = {
      isSuccess: isSuccess,
      title: title,
      message: message
    };
    dc.position = { top: "26.5px" };

    this.dialogRef = this.matDialog.open(NotificationComponent, dc);
  }
}
