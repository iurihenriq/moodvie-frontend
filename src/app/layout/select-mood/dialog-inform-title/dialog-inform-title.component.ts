import {Component, OnInit, Inject} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Observable, startWith, map, tap} from 'rxjs';
import {TMDBService} from '../../service/tmdb.service';
import {MoodService} from '../../service/mood.service';

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
  movies: Observable<{ id: any; title: any; }[]> = new Observable<{ id: any; title: any; }[]>();
  mood: string = 'sentimento';
  moodType: string = '';

  movieOptions: any[] = [];
  myControl = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tmdb: TMDBService,
    private moodService: MoodService,
    @Inject(MAT_DIALOG_DATA) data: DialogData
  ) {
    this.mood = data.mood.toLocaleLowerCase();
    this.moodType = data.moodType;
  }

  ngOnInit() {
    this.selectForm = this.formBuilder.group({
      contentType: ['', [Validators.required]],
      title: ['', [Validators.required]],
      contentId: [''],
      moodType: this.moodType
    });

    this.selectForm.valueChanges.subscribe((form: any) => {
console.log(form)
      if (this.selectForm.valid) {
        this.tmdb.findMovieByQuery(form.title).subscribe({
          next: (value) => {
            this.movieOptions = value.map((movie: any) => {
              return {
                id: movie.id,
                title: movie.title
              };
            })
          }, error: (err) => {
            console.log(err.status);
          }
        });
      }
    });

    this.movies = this.selectForm.get('title')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value || '')),
      tap((filteredMovies: any) => {
        const selectedMovie = filteredMovies.find((movie: any) => movie.title.toLowerCase() === this.selectForm.get('title')!.value.toLowerCase());
        if (selectedMovie) {
          this.selectForm.patchValue({contentId: selectedMovie.id});

        } else {
          this.selectForm.patchValue({contentId: ''});
        }
      })
    );
  }

  selectTitle() {
    this.moodService.saveMood(this.selectForm.value).subscribe({
      next: (value) => {
        alert("humor atribuído com sucesso!")
        localStorage.setItem('moodType', this.moodType);
        localStorage.setItem('mood', this.mood);
        this.router.navigate(['/recommender']);
      },
      error: (err) => {
        alert("deu erro");
      }
    });
  }


  private _filter(value: string): { id: any; title: any; }[] {
    const filterValue = value.toLowerCase();

    return this.movieOptions.filter((option) =>
      option.title && option.title.toLowerCase().includes(filterValue)
    );
  }

}
