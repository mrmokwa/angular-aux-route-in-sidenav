import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@UntilDestroy()
@Directive({
  selector: '[appDrawerAutoMode]',
})
export class DrawerAutoModeDirective implements AfterViewInit {
  @Input() minContainerSize = 1024;

  @HostListener('window:resize')
  onResize = () => this.width$.next(window.innerWidth);

  width$ = new ReplaySubject<number>(1);

  drawerOver$ = this.width$.pipe(
    map((w) => w < this.minContainerSize),
    distinctUntilChanged()
  );

  constructor(private drawer: MatDrawer) {
    setTimeout(() => this.width$.next(window.innerWidth));
  }

  ngAfterViewInit(): void {
    this.drawerOver$
      .pipe(untilDestroyed(this))
      .subscribe((over) => (this.drawer.mode = over ? 'over' : 'side'));
  }
}
