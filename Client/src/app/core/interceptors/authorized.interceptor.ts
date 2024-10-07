import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainAPIService } from '../services/main-api.service';

@Injectable()
export class AuthorizedInterceptor implements HttpInterceptor {
  constructor(private mainAPI: MainAPIService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('token');
    if (this.mainAPI.token.getValue()) {
      const withAuth = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.mainAPI.token.getValue()}`
        }
      });
      return next.handle(withAuth);
    }
    return next.handle(req);
  }
}