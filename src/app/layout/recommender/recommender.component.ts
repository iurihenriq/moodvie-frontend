import { Component } from '@angular/core';

@Component({
  selector: 'app-recommender',
  templateUrl: './recommender.component.html',
  styleUrls: ['./recommender.component.scss']
})
export class RecommenderComponent {
  mood: string = "triste"
  banner: string = "../../../assets/images/banner.jpg"
  title: string = "The Batman"
  year: number = 2022
  duration: string = "2h 30min"
  stars: number = 5;
  starsArray: any[] = new Array(this.stars);
  streaming: string = "hbo"
  streamingURL: string = `../../../assets/images/streamings/${this.streaming}.png`
  linkStreaming: string = "https://www.hbomax.com/br/pt"
  sinopse: string = "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população."
  genders: any = [
    {name: 'ação'},
    {name: 'terror'}
  ]
  movies: any = [
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
    {name: "../../../assets/images/banner.jpg"},
  ]
  movie: number = 8;
  movieArray: any[] = new Array(this.movie);

}
