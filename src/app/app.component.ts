import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('pt-BR');
    const lang = localStorage.getItem('language') || navigator.language;
    if (lang) {
      translate.use(lang);
    } else {
      translate.use('pt-BR');
    }
  }
}
