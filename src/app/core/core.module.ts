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
import {
  MatProgressSpinnerDefaultOptions,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
} from '@angular/material/progress-spinner';
import {
  MatProgressBarDefaultOptions,
  MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
} from '@angular/material/progress-bar';

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

export const CST_SNACK_BAR_DEFAULT_OPTIONS = [
  {
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {
      duration: 5000,
      horizontalPosition: 'start',
    } as MatSnackBarConfig,
  },
];

export const CST_FORM_FIELD_DEFAULT_OPTIONS = [
  {
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: { appearance: 'fill' } as MatFormFieldDefaultOptions,
  },
];

export const CST_PROGRESS_SPINNER_DEFAULT_OPTIONS = [
  {
    provide: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
    useValue: { diameter: 84 } as MatProgressSpinnerDefaultOptions,
  },
];

export const CST_PROGRESS_BAR_DEFAULT_OPTIONS = [
  {
    provide: MAT_PROGRESS_BAR_DEFAULT_OPTIONS,
    useValue: {
      color: 'accent',
      mode: 'indeterminate',
    } as MatProgressBarDefaultOptions,
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
    CST_SNACK_BAR_DEFAULT_OPTIONS,
    CST_FORM_FIELD_DEFAULT_OPTIONS,
    CST_PROGRESS_SPINNER_DEFAULT_OPTIONS,
    CST_PROGRESS_BAR_DEFAULT_OPTIONS,
  ],
})
export class CoreModule {}
