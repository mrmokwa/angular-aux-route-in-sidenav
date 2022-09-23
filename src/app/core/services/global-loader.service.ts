import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  constructor() {}

  private loadingSource = new BehaviorSubject<boolean>(true);
  readonly loading$ = this.loadingSource.asObservable();
  setState = (value: boolean) => this.loadingSource.next(value);
}
