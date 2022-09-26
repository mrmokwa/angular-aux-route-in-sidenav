import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AUTH_TOKEN_INTERCEPTOR } from './interceptors/auth-token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { API_SERVICE_INTERCEPTOR } from './interceptors/api-service-interceptor';

import localePt from '@angular/common/locales/pt';
import {
  MatSnackBarConfig,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

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

export const MAT_SNACKBAR_CUSTOM_SETTINGS = [
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: { duration: 4000 } as MatSnackBarConfig,
  },
];

export const MAT_FORM_FIELD_CUSTOM_SETTIGNS = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'fill' } as MatFormFieldDefaultOptions,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MatSnackBarModule],
  exports: [HttpClientModule],
  providers: [
    AUTH_TOKEN_INTERCEPTOR,
    API_SERVICE_INTERCEPTOR,
    LOCALE_SETTIGNS,
    MAT_SNACKBAR_CUSTOM_SETTINGS,
    MAT_FORM_FIELD_CUSTOM_SETTIGNS,
  ],
})
export class CoreModule {}
