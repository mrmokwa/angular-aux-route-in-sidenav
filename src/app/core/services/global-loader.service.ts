import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  loading$ = new BehaviorSubject<boolean>(true);

  constructor() {}

  setState(value: boolean) {
    this.loading$.next(value);
  }
}
