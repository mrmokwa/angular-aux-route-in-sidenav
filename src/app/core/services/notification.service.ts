import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private readonly snackBar: MatSnackBar) {}

  open = (
    message: string,
    action?: string | undefined,
    config?: MatSnackBarConfig<any> | undefined
  ) => this.snackBar.open(message, action, config);

  dismiss = () => this.snackBar.dismiss();

  info(message: string): void {
    this.snackBar.open(message, undefined, {
      panelClass: 'info-notification',
    });
  }

  warn(message: string): void {
    this.snackBar.open(message, undefined, {
      panelClass: 'warning-notification',
    });
  }

  success(message: string): void {
    this.snackBar.open(message, undefined, {
      panelClass: 'success-notification',
    });
  }

  error(message: string): void {
    this.snackBar.open(message, 'Dispensar', {
      duration: 0,
      panelClass: 'error-notification',
    });
  }
}
