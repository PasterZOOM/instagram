import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.prod'

@Injectable()
export class CredentialsInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      withCredentials: true,
      headers: new HttpHeaders().append('API-KEY', environment.apiKey),
    })
    return next.handle(request)
  }
}
