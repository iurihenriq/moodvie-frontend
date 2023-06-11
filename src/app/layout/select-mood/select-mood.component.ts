import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogInformTitleComponent } from './dialog-inform-title/dialog-inform-title.component';
import { Router } from '@angular/router';

interface DialogData {
  mood: string;
  moodType: string;
}

@Component({
  selector: 'app-select-mood',
  templateUrl: './select-mood.component.html',
  styleUrls: ['./select-mood.component.scss'],
})
export class SelectMoodComponent {
  constructor(private dialog: MatDialog, private router: Router) {}

  moods: any[] = [
    { name: 'Feliz', emoji: '😄', value: 'HAPPY', translation: 'layout.happy' },
    { name: 'Triste', emoji: '😢', value: 'SAD', translation: 'layout.sad' },
    { name: 'Irritado', emoji: '😠', value: 'ANGRY', translation: 'layout.angry' },
    { name: 'Ansioso', emoji: '😬', value: 'ANXIOUS', translation: 'layout.anxious' },
    { name: 'Normal', emoji: '😐', value: 'NORMAL', translation: 'layout.normal' },
    { name: 'Entediado', emoji: '😒', value: 'BORED', translation: 'layout.bored' },
    { name: 'Solitário', emoji: '😔', value: 'LONELY', translation: 'layout.lonely' },
    { name: 'Nostálgico', emoji: '🌅', value: 'NOSTALGIC', translation: 'layout.nostalgic' },
    { name: 'Apaixonado', emoji: '❤️', value: 'IN_LOVE', translation: 'layout.inLove' },
    { name: 'Pensativo', emoji: '🤔', value: 'THOUGHTFUL', translation: 'layout.thoughtful' },
    { name: 'Emotivo', emoji: '😭', value: 'EMOTIONAL', translation: 'layout.emotional' },
    { name: 'Estressado', emoji: '😫', value: 'STRESSED_OUT', translation: 'layout.stressedOut' },
    { name: 'Relaxado', emoji: '😌', value: 'RELAXED', translation: 'layout.relaxed' },
    { name: 'Animado', emoji: '😃', value: 'EXCITED', translation: 'layout.excited' },
    { name: 'Surpreenda-me', emoji: '🎉', value: 'SURPRISE_ME', translation: 'layout.surpriseMe' },
  ];

  openDialog(mood: string, moodType: string): void {
    const dialogData: DialogData = {
      mood: mood,
      moodType: moodType,
    };

    this.dialog.open(DialogInformTitleComponent, {
      width: '500px',
      data: dialogData,
      disableClose: true,
    });
  }

  surpriseMe() {
    localStorage.setItem('moodType', 'SURPRISE_ME');
    localStorage.setItem('mood', 'curioso');
    this.router.navigate(['/recommender']);
  }
}
