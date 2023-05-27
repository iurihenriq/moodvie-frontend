import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformTitleComponent } from './dialog-inform-title/dialog-inform-title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-mood',
  templateUrl: './select-mood.component.html',
  styleUrls: ['./select-mood.component.scss'],
})
export class SelectMoodComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  moods: any[] = [
    { name: 'Feliz', emoji: '😄', value: 'HAPPY' },
    { name: 'Triste', emoji: '😢', value: 'SAD' },
    { name: 'Irritado', emoji: '😠', value: 'ANGRY' },
    { name: 'Ansioso', emoji: '😬', value: 'ANXIOUS' },
    { name: 'Normal', emoji: '😐', value: 'NORMAL' },
    { name: 'Entediado', emoji: '😒', value: 'BORED' },
    { name: 'Solitário', emoji: '😔', value: 'LONELY' },
    { name: 'Nostálgico', emoji: '🌅', value: 'NOSTALGIC' },
    { name: 'Apaixonado', emoji: '❤️', value: 'IN_LOVE' },
    { name: 'Pensativo', emoji: '🤔', value: 'THOUGHTFUL' },
    { name: 'Emotivo', emoji: '😭', value: 'EMOTIONAL' },
    { name: 'Estressado', emoji: '😫', value: 'STRESSED_OUT' },
    { name: 'Relaxado', emoji: '😌', value: 'RELAXED' },
    { name: 'Animado', emoji: '😃', value: 'EXCITED' },
    { name: 'Surpreenda-me', emoji: '🎉', value: 'SURPRISE_ME' },
  ];

  openDialog(mood: string): void {
    this.dialog.open(DialogInformTitleComponent, {
      width: '500px',
      data: mood,
      disableClose: true,
    });
  }

  surpriseMe() {
    alert('surpresa');
    this.router.navigate(['/recommender']);
  }
}
