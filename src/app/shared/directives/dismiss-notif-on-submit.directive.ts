import { Directive, HostListener } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';

@Directive({
  selector: 'form',
})
export class DismissNotifOnSubmitDirective {
  constructor(private notificationService: NotificationService) {}

  @HostListener('submit')
  afterSubmit = () => this.notificationService.dismiss();
}
