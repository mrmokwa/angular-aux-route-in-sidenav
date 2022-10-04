import { Directive, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[appMoveTopOnNavigation]',
})
export class MoveTopOnNavigationDirective implements OnInit {
  constructor(private el: ElementRef, private router: Router) {}

  private events$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map((e) => e as NavigationEnd),
    filter((e: NavigationEnd) => e.urlAfterRedirects.includes('(') === false),
    untilDestroyed(this)
  );

  ngOnInit(): void {
    this.events$.subscribe(() => (this.el.nativeElement.scrollTop = 0));
  }
}
