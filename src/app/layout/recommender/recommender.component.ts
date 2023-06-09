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
  streamings: string[] = []//'hbo';
  tmdbIMGLink:string = 'https://image.tmdb.org/t/p/w500'
  streamingIMG: string[] = []//`../../../assets/images/streamings/${this.streaming}.png`;
  linkStreaming: string[] = []//'https://www.hbomax.com/br/pt';
  watchProviders: any;
  sinopse: string = '';
  genders: any = [];

  movie: number = 8;
  movieArray: any[] = new Array(this.movie);

  page: number = 0;
  filterMovies: any[] = [];

  index:number = 0;

  constructor(
    private service: TMDBService,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mood = localStorage.getItem('mood')!;
    this.findMovie();
  }


  nextRecommendation(){
    this.index++;
    this.linkStreaming = [];
    this.streamingIMG = [];
    this.streamings = [];
        if(this.index == this.filterMovies.length){
        this.findMovie();
        }else{
          this.findMovieDetails(this.index);
        }
  }

  findMovie() {
    this.page++;
    this.request = this.service.findRecommendations(this.page).subscribe((movies: any) => {
      console.log(movies)
      for (let index = 0; index < movies.results.length; index++) {
        if (movies.results[index].overview.length != 0 && !this.filterMovies.includes(movies.results[index].id)) {
          this.filterMovies.push(movies.results[index].id);
        }
      }
      this.findMovieDetails(this.index);
    });
  }

  findMovieDetails(index: number){
    this.service
        .findDetailsMovie(this.filterMovies[index])
        .subscribe((movieDetails: any) => {
          console.log(movieDetails)
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

          this.watchProviders = movieDetails['watch/providers']
          if(localStorage.getItem('language') === 'pt-BR'){
            if(this.watchProviders.results.BR){
              this.watchProviders.results.BR.flatrate.forEach((fr: any)=>{
                this.streamings.push(fr.provider_name);
                this.streamingIMG.push(this.tmdbIMGLink+fr.logo_path)
                this.linkStreaming.push(this.watchProviders.results.BR.link);
              })
            }
          } else if(localStorage.getItem('language') === 'en-US'){
            if(this.watchProviders.results.US){
              this.watchProviders.results.US.flatrate.forEach((fr: any)=>{
                this.streamings.push(fr.provider_name);
                this.streamingIMG.push(this.tmdbIMGLink+fr.logo_path)
                this.linkStreaming.push(this.watchProviders.results.US.link);
              })
            }
          }

          if(movieDetails.videos){
            if (movieDetails.videos.results.length !== 0) {
              if(movieDetails.videos.results[0].official==true){
                this.trailer = `https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`;
                this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
                  this.trailer
                );
              } else{
                this.viewTrailer = false;
              }
            } else {
              this.viewTrailer = false;
            }
          }else{
            this.viewTrailer = false;
          }

          this.year = movieDetails.release_date.substring(0, 4);
          this.duration = this.formatDuration(movieDetails.runtime);
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
