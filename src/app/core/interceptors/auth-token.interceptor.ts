import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

const JWT_TOKEN =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyIiwidW5pcXVlX25hbWUiOiJtcm1va3dhIiwiZW1haWwiOiJtYXRoZXVzLm1va3dhQGdtYWlsLmNvbSIsInRpcG9Vc3VhcmlvIjoiQWRtIiwibmJmIjoxNjYxOTQ2NTc1LCJleHAiOjI2NjI1NTEzNzUsImlhdCI6MTY2MTk0NjU3NX0.lb5SUkUFSo5KMCuYeicJkSMqxKqQH15-un8t-PjLK84xCVbYv6ufPqRNjv6K2HsrG60FUev0GvlECNl_UJtSeg';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const handler = req.url.includes('/api/')
      ? req.clone({ setHeaders: { Authorization: `Bearer ${JWT_TOKEN}` } })
      : req;

    return next.handle(handler);
  }
}

export const AUTH_TOKEN_INTERCEPTOR = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true,
  },
];
