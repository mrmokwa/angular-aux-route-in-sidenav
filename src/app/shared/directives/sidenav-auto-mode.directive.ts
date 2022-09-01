import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { ReplaySubject, Subscription } from 'rxjs';
import { tap, distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[appSidenavAutoMode]',
})
export class SidenavAutoModeDirective implements AfterViewInit, OnDestroy {
  @Input() minContainerSize = 763;

  @HostListener('window:resize')
  onResize = () => this.updateWidth();

  width = new ReplaySubject<number>(1);
  sidenavOver = this.width.pipe(map((t) => t < this.minContainerSize));
  subscription = new Subscription();

  constructor(private el: ElementRef, private sidenav: MatSidenav) {}

  updateWidth() {
    const sidenav: ElementRef<HTMLElement> = this.el;
    const sidenavWidth = sidenav.nativeElement.clientWidth;
    const containerWidth = sidenav.nativeElement.parentElement?.clientWidth;

    if (containerWidth) {
      this.width.next(containerWidth - sidenavWidth);
    }
  }

  ngAfterViewInit(): void {
    const watchModeChanges = this.sidenavOver
      .pipe(
        distinctUntilChanged(),
        tap((x) => console.log(x))
      )
      .subscribe((over) => (this.sidenav.mode = over ? 'over' : 'side'));

    this.subscription.add(watchModeChanges);

    setTimeout(() => this.updateWidth());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
