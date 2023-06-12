import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  apiKey = "43e921031ab69189ed0f418f50a7237e";
  lang = 'pt-BR';
  pageNumber: number = 1;

  constructor(private http: HttpClient) {
  }

  // findMovieListRandom(type: string) {
  //   this.pageNumber;

  //   // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=${page}&with_watch_monetization_types=flatrate&with_release_type=3&vote_count.gte=100&vote_average.gte=6.0&append_to_response=videos,overview,watch/providers`;

  //   const url = `${environment.apiUrl}/recommendations/${type}/${contentId}/${this.pageNumber}/${this.lang}`
  //   this.pageNumber++;
  //   return this.http.get<any[]>(url);
  // }

  findMovieListRandom() {
    const page = Math.floor(Math.random() * 500) + 1;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=${page}&with_watch_monetization_types=flatrate&with_release_type=3&vote_count.gte=100&vote_average.gte=6.0&append_to_response=videos,overview,watch/providers`;

    return this.http.get<any[]>(url);
  }

  findRecommendations(page:number){
    const type = localStorage.getItem('contentType');
    const lang = localStorage.getItem('lang');
    const mood = localStorage.getItem('moodType');
    const url = `${environment.apiUrl}/api/tmdb/recommendations/${type}/${mood}/${page}/${this.lang}`
    return this.http.get<any[]>(url);
  }

  findDetailsMovie(movieId: any) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=${this.lang}&append_to_response=videos,watch/providers`;

    return this.http.get<any[]>(url);
  }

  findTrailer(movieId: any) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&${this.lang}`

    return this.http.get<any[]>(url);
  }

  findMovieByQuery(title: string) {
    const type = localStorage.getItem('contentType');
    const url = `${environment.apiUrl}/api/tmdb/query/${type}/${this.lang}?query=${title}`

    return this.http.get<any[]>(url);
  }
}
