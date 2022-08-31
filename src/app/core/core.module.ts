import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AUTH_TOKEN_INTERCEPTOR } from './interceptors/auth-token.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { API_SERVICE_INTERCEPTOR } from './interceptors/api-service-interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
  providers: [AUTH_TOKEN_INTERCEPTOR, API_SERVICE_INTERCEPTOR],
})
export class CoreModule {}
