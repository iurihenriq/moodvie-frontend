import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError, Observable, throwError} from 'rxjs';

import {AuthenticationService} from "../service/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let updatedRequest;

    if (request.url.includes("/api")) {
      updatedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.bearerToken}`,
        },
      });
    } else {
      updatedRequest = request.clone();
    }



    return next.handle(updatedRequest).pipe(
      catchError((err, _caught) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigate(['/login']).catch(() => {
            alert('Rota não encontrada');
          });
        }
        return throwError(() => err);
      })
    );
  }
}
