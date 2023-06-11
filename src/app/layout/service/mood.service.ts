import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoodService {

  constructor(private http: HttpClient) { }

  saveMood(moodForm: any){
    const url = `${environment.apiUrl}/api/mood`

    return this.http.post(url,moodForm);
  }
}
