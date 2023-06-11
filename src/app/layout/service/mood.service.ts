import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
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

  findMoods() {
    const url = `${environment.apiUrl}/api/mood`
    const params = new HttpParams().append('lang', localStorage.getItem('language')!)
    return this.http.get(url, {params});
  }
}
