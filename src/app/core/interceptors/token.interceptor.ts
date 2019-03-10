import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  private token = '';
  constructor(private storage: StorageService) {
    this.getCurrentToken();
  }

  async getCurrentToken() {
    // TODO: work around
    // the async and await for waiting to get the token before check the server with no token
    if (!this.token) {
      await this.storage.getToken().subscribe((token:string) => (this.token = token));
    }
    return this.token;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.getCurrentToken()
      }
    });
    return next.handle(request);
  }
}
