import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AUTH_TOKEN_INTERCEPTOR } from './interceptors/auth-token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { API_SERVICE_INTERCEPTOR } from './interceptors/api-service-interceptor';

import localePt from '@angular/common/locales/pt';
import {
  MatSnackBarConfig,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';

registerLocaleData(localePt, 'pt-BR');

export const LOCALE_SETTIGNS = [
  {
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  },
  {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL',
  },
];

export const SNACKBAR_SETTINGS = [
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { duration: 3000 } as MatSnackBarConfig,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [
    AUTH_TOKEN_INTERCEPTOR,
    API_SERVICE_INTERCEPTOR,
    LOCALE_SETTIGNS,
    SNACKBAR_SETTINGS,
  ],
})
export class CoreModule {}
