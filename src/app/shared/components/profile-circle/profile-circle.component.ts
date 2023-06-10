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
    this.language = this.translateService.getDefaultLang();
    this.translateService.use(this.translateService.getDefaultLang());
  }

  logout() {
    this.service.logout();
    this.router.navigate(['/login']).then(r => console.log(r))
  }

  changeLanguage() {
    if (this.language == 'pt-BR') {
      this.translateService.use('en-US');
      this.language = 'en-US';
    } else {
      this.translateService.use('pt-BR');
      this.language = 'pt-BR';
    }
  }
}
