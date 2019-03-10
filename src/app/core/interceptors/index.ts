import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { LoadingInterceptor } from './loading.interceptor';

export const INTERCERPTORS = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlingInterceptor,
    multi: true
  },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
];
