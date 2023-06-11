import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/service/authentication.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-profile-circle',
  templateUrl: './profile-circle.component.html',
  styleUrls: ['./profile-circle.component.scss']
})
export class ProfileCircleComponent implements OnInit {
  language!: string;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private service: AuthenticationService) {
  }

  ngOnInit() {
    if (!localStorage.getItem('language')) {
      this.language = this.translateService.getDefaultLang();
      if (this.language == 'pt-BR' || this.language == 'en-US') {
        localStorage.setItem('language', this.language);
        this.translateService.use(this.language);
      } else {
        localStorage.setItem('language', 'pt-BR');
        this.translateService.use('pt-BR');
      }
    } else {
      this.translateService.use(localStorage.getItem('language')!);
    }
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']).then(r => console.log(r))
  }

  changeLanguage() {
    if (localStorage.getItem('language') == 'pt-BR') {
      this.translateService.use('en-US');
      this.language = 'en-US';
      localStorage.setItem('language', this.language);
    } else {
      this.translateService.use('pt-BR');
      this.language = 'pt-BR';
      localStorage.setItem('language', 'pt-BR');
    }
  }
}
