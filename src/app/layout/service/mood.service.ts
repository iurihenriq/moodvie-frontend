import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private http: HttpClient) {
  }

  saveMood(moodForm: any) {
    const url = `${environment.apiUrl}/api/mood`
    return this.http.post(url, moodForm);
  }

  findMoods(): Observable<any[]> {
    const url = `${environment.apiUrl}/api/mood`
    const params = new HttpParams()
      .append('lang', localStorage.getItem('language')!)
      .append('contentType', localStorage.getItem('contentType')!)
    return this.http.get<any[]>(url, {params});
  }
}
