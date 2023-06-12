import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogInformTitleComponent} from './dialog-inform-title/dialog-inform-title.component';
import {Router} from '@angular/router';
import {MoodService} from "../service/mood.service";

interface DialogData {
  mood: string;
  moodType: string;
}

@Component({
  selector: 'app-select-mood',
  templateUrl: './select-mood.component.html',
  styleUrls: ['./select-mood.component.scss'],
})
export class SelectMoodComponent implements OnInit {

  contentType: string = '';

  isLoading = false;

  moods: any[] = [
    {name: 'Feliz', emoji: '😄', value: 'HAPPY', translation: 'layout.happy', content: null},
    {name: 'Triste', emoji: '😢', value: 'SAD', translation: 'layout.sad', content: null},
    {name: 'Irritado', emoji: '😠', value: 'ANGRY', translation: 'layout.angry', content: null},
    {name: 'Ansioso', emoji: '😬', value: 'ANXIOUS', translation: 'layout.anxious', content: null},
    {name: 'Normal', emoji: '😐', value: 'NORMAL', translation: 'layout.normal', content: null},
    {name: 'Entediado', emoji: '😒', value: 'BORED', translation: 'layout.bored', content: null},
    {name: 'Solitário', emoji: '😔', value: 'LONELY', translation: 'layout.lonely', content: null},
    {name: 'Nostálgico', emoji: '🌅', value: 'NOSTALGIC', translation: 'layout.nostalgic', content: null},
    {name: 'Apaixonado', emoji: '❤️', value: 'IN_LOVE', translation: 'layout.inlove', content: null},
    {name: 'Pensativo', emoji: '🤔', value: 'THOUGHTFUL', translation: 'layout.thoughtful', content: null},
    {name: 'Emotivo', emoji: '😭', value: 'EMOTIONAL', translation: 'layout.emotional', content: null},
    {name: 'Estressado', emoji: '😫', value: 'STRESSED_OUT', translation: 'layout.stressedout', content: null},
    {name: 'Relaxado', emoji: '😌', value: 'RELAXED', translation: 'layout.relaxed', content: null},
    {name: 'Animado', emoji: '😃', value: 'EXCITED', translation: 'layout.excited', content: null},
    {name: 'Surpreenda-me', emoji: '🎉', value: 'SURPRISE_ME', translation: 'layout.surpriseme', content: null},
  ];

  constructor(private dialog: MatDialog, private router: Router, private moodService: MoodService) {
  }

  ngOnInit() {
    if (localStorage.getItem('contentType')) {
      this.contentType = localStorage.getItem('contentType')!;
      this.onContentType(localStorage.getItem('contentType')!);
    } else {
      this.contentType = "MOVIE";
      this.onContentType("MOVIE")
    }
    this.setTitlesAtMoods();
  }

  setTitlesAtMoods() {
    this.isLoading = true;
    this.moods.map(mood => mood.content = null);
    this.moodService.findMoods().subscribe({
      next: (response: any[]) => {
        response.forEach((mood) => {
          let index = this.moods.findIndex(element => element.value == mood.moodType);
          this.moods[index].content = mood.content;
        })
        this.isLoading = false;
      }
    })
  }

  onContentType(option: string) {
    localStorage.setItem('contentType', option);
    this.setTitlesAtMoods();
  }

  openDialog(mood: any): void {
    if (mood.value != 'SURPRISE_ME') {
      if (!mood.content) {
        const dialogData: DialogData = {
          mood: mood.translation,
          moodType: mood.value,
        };
        this.dialog.open(DialogInformTitleComponent, {
          width: '500px',
          data: dialogData,
          disableClose: true,
        });
      } else {
        localStorage.setItem('contentId', mood.content.id);
        localStorage.setItem('moodType', mood.value);
        localStorage.setItem('mood', mood.translation);
        this.router.navigate(['/recommender']).catch(err => console.error(err));
      }
    } else {
      this.surpriseMe(mood);
    }

  }

  surpriseMe(mood: any) {
    localStorage.setItem('moodType', mood.moodType);
    localStorage.setItem('mood', mood.translation);
    this.router.navigate(['/recommender']).catch(err => console.error(err));
  }
}
