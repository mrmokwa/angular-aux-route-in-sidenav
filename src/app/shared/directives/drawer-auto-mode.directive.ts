import {
  AfterViewInit,
  Directive,
  ElementRef,
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
  @Input() minContainerSize = 763;

  @HostListener('window:resize')
  onResize = () => this.updateWidth();

  width = new ReplaySubject<number>(1);
  drawerOver = this.width.pipe(map((t) => t < this.minContainerSize));
  subscription = new Subscription();

  constructor(private el: ElementRef, private drawer: MatDrawer) {}

  updateWidth() {
    const drawer: ElementRef<HTMLElement> = this.el;
    const drawerWidth = drawer.nativeElement.clientWidth;
    const containerWidth = drawer.nativeElement.parentElement?.clientWidth;

    if (containerWidth) {
      this.width.next(containerWidth - drawerWidth);
    }
  }

  ngAfterViewInit(): void {
    const watchModeChanges = this.drawerOver
      .pipe(distinctUntilChanged())
      .subscribe((over) => (this.drawer.mode = over ? 'over' : 'side'));

    this.subscription.add(watchModeChanges);

    setTimeout(() => this.updateWidth());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
