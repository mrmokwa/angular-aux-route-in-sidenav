import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoDrawerService {
  private loadingSource = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSource.asObservable();

  private messageSource = new BehaviorSubject<string | undefined>(undefined);
  readonly message$ = this.messageSource.asObservable();

  setLoading = (value: boolean, message: string | undefined = undefined) => {
    this.loadingSource.next(value);
    this.messageSource.next(message);
  };
}
