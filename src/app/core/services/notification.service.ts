import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  open(
    message: string,
    action?: string | undefined,
    config?: MatSnackBarConfig<any> | undefined
  ) {
    return this.snackBar.open(message, action, config);
  }

  info(message: string): void {
    this.snackBar.open(message, 'Dispensar', {
      panelClass: 'info-notification',
    });
  }

  warn(message: string): void {
    this.snackBar.open(message, 'Dispensar', {
      panelClass: 'warning-notification',
    });
  }

  success(message: string): void {
    this.snackBar.open(message, 'Dispensar', {
      panelClass: 'success-notification',
    });
  }

  error(message: string): void {
    this.snackBar.open(message, 'Dispensar', {
      panelClass: 'error-notification',
    });
  }
}
