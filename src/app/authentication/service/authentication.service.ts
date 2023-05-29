import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

interface Login {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(loginInfo: any) {
    return this.http
      .post(`${environment.apiUrl}/login`, loginInfo)
      .pipe<any>(map((response: any) => (this.bearerToken = response.token)));
  }

  get bearerToken() {
    return localStorage.getItem('bearerToken');
  }

  set bearerToken(bearerToken) {
    localStorage.setItem('bearerToken', bearerToken as string);
  }

  get isAuthenticated(): boolean {
    return !!this.bearerToken;
  }

  set currentUser(currentUser: any) {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }

  get currentUser() {
    return JSON.parse(localStorage.getItem('currentUser') as string) as {
      profile: string;
      applications: string;
    };
  }
}
