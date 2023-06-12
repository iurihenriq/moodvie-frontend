import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../service/tmdb.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DialogPlaylistComponent } from './dialog-playlist/dialog-playlist.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.scss'],
})
export class RecommenderComponent implements OnInit {
  type: string = 'filme';
  request = new Subscription();


  viewTrailer: boolean = true;
  mood: string = '';
  banner: string = '';
  title: string = '';
  year: string = '';
  trailer: string = '';
  videoUrl: any;
  duration: string = '';
  stars: number = 5;
  starsArray: any[] = new Array(this.stars);
  streaming: string = 'hbo';
  streamingURL: string = `../../../assets/images/streamings/${this.streaming}.png`;
  linkStreaming: string = 'https://www.hbomax.com/br/pt';
  sinopse: string = '';
  genders: any = [];

  movie: number = 8;
  movieArray: any[] = new Array(this.movie);

  page: number = 1;
  filterMovies: any[] = [];

  constructor(
    private service: TMDBService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mood = localStorage.getItem('mood')!;
    this.findMovie();
  }

  findMovie() {
this.request = this.service.findRecommendations(this.page).subscribe((movies: any) => {
      console.log(movies)
      for (let index = 0; index < movies.results.length; index++) {
        if (movies.results[index].overview.length != 0) {
          this.filterMovies.push(movies.results[index]);
        }
      }

      const moviesLenght = this.filterMovies.length;


      const randomIndex = Math.floor(Math.random() * this.filterMovies.length);
      const randomMovie = this.filterMovies[randomIndex];

      this.service
        .findDetailsMovie(randomMovie.id)
        .subscribe((movieDetails: any) => {
          this.genders = [];
          if (movieDetails.genres.length == 1) {
            this.genders.push(movieDetails.genres[0]);
          } else if (movieDetails.genres.length >= 2) {
            this.genders.push(movieDetails.genres[0]);
            this.genders.push(movieDetails.genres[1]);
          }

          this.viewTrailer = true;
          this.title = movieDetails.title;
          this.sinopse = movieDetails.overview;
          this.banner = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

          this.service.findTrailer(randomMovie.id).subscribe((trailer: any) => {
            if (trailer.results.length !== 0) {
              this.trailer = `https://www.youtube.com/embed/${trailer.results[0].key}`;
              this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                this.trailer
              );
            } else {
              this.viewTrailer = false;
            }
          });

          this.year = movieDetails.release_date.substring(0, 4);
          this.duration = this.formatDuration(movieDetails.runtime);
        });
    });
  }

  openDialogPlaylist() {
    this.dialog.open(DialogPlaylistComponent, {
      width: '300px',
      // data: mood,
      disableClose: true,
    });
  }

  setType(type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  formatDuration(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hoursText = hours > 0 ? `${hours}h ` : '';
    const minutesText = remainingMinutes > 0 ? `${remainingMinutes}min` : '';
    return `${hoursText}${minutesText}`;
  }
}
