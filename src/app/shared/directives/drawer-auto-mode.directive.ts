import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { ReplaySubject, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[appDrawerAutoMode]',
})
export class DrawerAutoModeDirective implements AfterViewInit, OnDestroy {
  @Input() minContainerSize = 1024;

  @HostListener('window:resize')
  onResize = () => this.width$.next(window.innerWidth);

  subscription = new Subscription();

  width$ = new ReplaySubject<number>(1);

  drawerOver$ = this.width$.pipe(map((w) => w < this.minContainerSize));

  constructor(private drawer: MatDrawer) {
    setTimeout(() => this.width$.next(window.innerHeight));
  }

  ngAfterViewInit(): void {
    const watchModeChanges = this.drawerOver$
      .pipe(distinctUntilChanged())
      .subscribe((over) => (this.drawer.mode = over ? 'over' : 'side'));

    this.subscription.add(watchModeChanges);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
