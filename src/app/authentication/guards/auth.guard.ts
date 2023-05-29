import { Injectable } from '@angular/core';
import { Router, UrlTree, CanActivate } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authenticationService.isAuthenticated) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
