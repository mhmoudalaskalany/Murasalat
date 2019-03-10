import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingCtr: LoadingController) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingCtr.create().then(loader => loader.present());
    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          // TODO: work around
          // to keep the dismiss untell the response come back, it goes with internal server error (500) without waiting for it
          this.loadingCtr.dismiss();
        }, 500);
      })
    );
  }
}
