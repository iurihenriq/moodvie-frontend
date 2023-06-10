import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, startWith, map, debounceTime } from 'rxjs';
import { TMDBService } from '../../service/tmdb.service';

interface DialogData {
  mood: string;
  moodType: string;
}

@Component({
  selector: 'app-dialog-inform-title',
  templateUrl: './dialog-inform-title.component.html',
  styleUrls: ['./dialog-inform-title.component.scss'],
})
export class DialogInformTitleComponent implements OnInit {
  selectForm!: FormGroup;
  movies: Observable<string[]> = new Observable<string[]>();
  mood: string = 'sentimento';
  moodType: string = '';

  movieOptions: string[] = [];
  myControl = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tmdb: TMDBService,
    @Inject(MAT_DIALOG_DATA) data: DialogData
  ) {
    console.log(data)
    this.mood = data.mood.toLocaleLowerCase();
    this.moodType = data.moodType;
  }

  ngOnInit() {
    this.selectForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });

  //   this.selectForm.valueChanges.subscribe((form: any) =>
  //   this.tmdb.findMovieByQuery(form.type, form.title).subscribe((value) => {
  //     console.log(value);
  //     this.movieOptions = value.map((movie: any) => movie.title);
  //   }, (err) => {
  //     console.log(err.status);
  //   })
  // );

  this.selectForm.valueChanges.pipe(
    debounceTime(1000) // Tempo de espera de 1 seg
  ).subscribe((form: any) => {
    this.tmdb.findMovieByQuery(form.type, form.title).subscribe((value) => {
      console.log(value)
      this.movieOptions = value.map((movie: any) => movie.title);
    }, (err) => {
      console.log(err.status);
    });
  });


    this.movies = this.selectForm.get('title')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value || ''))
    );

  }

  selectTitle() {
    localStorage.setItem('moodType', this.moodType);
    localStorage.setItem('mood', this.mood);

    this.router.navigate(['/recommender']);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.movieOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

}
