import {
  AfterViewInit,
  Directive,
  HostListener,
  Input,
  Optional,
} from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@UntilDestroy()
@Directive({
  selector: '[appDrawerAutoMode]',
})
export class DrawerAutoModeDirective implements AfterViewInit {
  @Input() minContainerSize = 1024;

  drawer: MatSidenav | MatDrawer;

  @HostListener('window:resize')
  onResize = () => this.width$.next(window.innerWidth);

  width$ = new ReplaySubject<number>(1);

  drawerOver$ = this.width$.pipe(
    map((w) => w < this.minContainerSize),
    distinctUntilChanged()
  );

  constructor(
    @Optional() matSidenav: MatSidenav,
    @Optional() matDrawer: MatDrawer
  ) {
    this.drawer = matSidenav ? matSidenav : matDrawer;

    setTimeout(() => this.width$.next(window.innerWidth));
  }

  ngAfterViewInit(): void {
    this.drawerOver$.pipe(untilDestroyed(this)).subscribe((over) => {
      this.drawer.mode = over ? 'over' : 'side';

      if (this.drawer instanceof MatSidenav) {
        this.drawer.mode === 'side' ? this.drawer.open() : this.drawer.close();
      }
    });
  }
}
