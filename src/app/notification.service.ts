import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  private showNotification(notificationText: string) {
    this.snackBar.open(notificationText, 'Ок', { duration: 5000 });
  }

  addition(notificationText: string) {
    this.showNotification(notificationText);
  }

  deletion(notificationText: string) {
    this.showNotification(notificationText);
  }

  editing(notificationText: string) {
    this.showNotification(notificationText);
  }
}
