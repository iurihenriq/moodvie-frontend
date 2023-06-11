import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../service/authentication.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router,
    private translateService: TranslateService
  ) {
  }

  ngOnInit() {
    let language = this.translateService.getDefaultLang();
    if (language == 'pt-BR' || language == 'en-US') {
      localStorage.setItem('language', language);
      this.translateService.use(language);
    } else {
      localStorage.setItem('language', 'pt-BR');
      this.translateService.use('pt-BR');
    }
  }

  mostrarSenha = false;

  togglePasswordVisibility() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login() {
    this.service.authenticate(this.loginForm.value).subscribe({
      next: (response: any) => {
        this.router.navigate(['/select-mood']).catch(() => alert('Erro!'));
      },
      error: () => {
        alert('USUÁRIO NÃO ENCONTRADO');
      },
    });
  }
}
