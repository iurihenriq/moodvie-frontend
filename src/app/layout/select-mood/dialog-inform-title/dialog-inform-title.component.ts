import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-inform-title',
  templateUrl: './dialog-inform-title.component.html',
  styleUrls: ['./dialog-inform-title.component.scss']
})
export class DialogInformTitleComponent {
  selectForm = this.formBuilder.group({
    type: ['', [Validators.required]],
    title: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

}
