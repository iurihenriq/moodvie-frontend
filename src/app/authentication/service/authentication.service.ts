import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable, take, tap} from 'rxjs';
import { environment } from 'src/environments/environment.prod';

interface Login {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(loginInfo: any) {
    console.log(loginInfo)
    return this.http.post(`${environment.apiUrl}login`, loginInfo);
  }
}
