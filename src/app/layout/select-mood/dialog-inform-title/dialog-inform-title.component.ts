import {Component, OnInit, Inject} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Observable, startWith, map, tap, debounceTime} from 'rxjs';
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
      contentType: [localStorage.getItem('contentType')],
      title: ['', [Validators.required]],
      contentId: [''],
      moodType: this.moodType
    });

    this.selectForm.valueChanges
      .subscribe((form: any) => {
        if (this.selectForm.valid) {
          this.tmdb.findMovieByQuery(form.title)
            .subscribe({
              next: (value) => {
                this.movieOptions = value.map((movie: any) => {
                  return {
                    id: movie.id,
                    title: movie.title
                  };
                })
              }, error: (err) => {
                console.error(err.status);
              }
            });
        }
      });
  }

  selectTitle() {
    let selectedTitle = this.selectForm.get('title')?.value;
    selectedTitle = this.movieOptions.find(movie => movie.title == selectedTitle);

    if (selectedTitle != undefined) {
      this.selectForm.patchValue({contentId: selectedTitle.id});
    } else {
      alert("Informe um filme existente!")
    }
    this.moodService.saveMood(this.selectForm.value).subscribe({
      next: (value) => {
        alert("Humor atribuído com sucesso!")
        localStorage.setItem('moodType', this.moodType);
        localStorage.setItem('mood', this.mood);
        this.router.navigate(['/recommender']).catch(err => console.error(err));
      },
      error: (err) => {
        alert("Erro ao atribuir o humor!");
      }
    });
  }
}
