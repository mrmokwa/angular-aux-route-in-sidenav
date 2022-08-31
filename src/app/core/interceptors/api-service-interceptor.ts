import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable()
export class ApiServiceInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const handler = req.url.startsWith('/api/')
      ? req.clone({ url: environment.url + req.url })
      : req;
    return next.handle(handler);
  }
}

export const API_SERVICE_INTERCEPTOR = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiServiceInterceptor,
    multi: true,
  },
];
