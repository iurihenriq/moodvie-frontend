import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommenderService {

  apiKey = "43e921031ab69189ed0f418f50a7237e";
  language = "pt-BR";

  constructor(private http: HttpClient) {
  }

  findMovieListRandom() {
    const page = Math.floor(Math.random() * 500) + 1;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=${page}&with_watch_monetization_types=flatrate&with_release_type=3&vote_count.gte=100&vote_average.gte=6.0&append_to_response=videos,overview,watch/providers`;

    return this.http.get<any[]>(url);
  }

  findDetailsMovie(movieId: any) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=${this.language}&append_to_response=videos,watch/providers`;

    return this.http.get<any[]>(url);
  }

  findTrailer(movieId: any) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&${this.language}`

    return this.http.get<any[]>(url);
  }
}
