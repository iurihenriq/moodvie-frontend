import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-dialog-inform-title',
  templateUrl: './dialog-inform-title.component.html',
  styleUrls: ['./dialog-inform-title.component.scss'],
})
export class DialogInformTitleComponent implements OnInit {
  selectForm!: FormGroup;
  movies: Observable<string[]> = new Observable<string[]>();
  mood: string = 'sentimento';

  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) mood: string
  ) {
    this.mood = mood.toLocaleLowerCase();
  }

  ngOnInit() {
    this.selectForm = this.formBuilder.group({
      type: ['', [Validators.required]],
      title: ['', [Validators.required]],
    });

    this.movies = this.selectForm.get('title')!.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value || ''))
    );

    this.selectForm.valueChanges.subscribe(() =>
      console.log(this.selectForm.value)
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
