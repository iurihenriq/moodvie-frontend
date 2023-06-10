import { Injectable } from '@angular/core';
import { Router, UrlTree, CanActivate } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class MoodGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const moodType = localStorage.getItem('moodType');
    if (moodType !== null && moodType !== '') {
      return true;
    }
    return this.router.createUrlTree(['/select-mood']);
  }
}
