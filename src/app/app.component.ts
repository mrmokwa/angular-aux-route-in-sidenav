import { Component } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { GlobalLoaderService } from './core/services/global-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private loadingService: GlobalLoaderService) {}

  loading$ = this.loadingService.loading$.pipe(distinctUntilChanged());
}
