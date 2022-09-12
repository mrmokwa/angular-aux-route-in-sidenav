import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() set message(value: string) {
    this._message = value;
  }

  get message() {
    return this._message;
  }

  private _message: string = '';
}
