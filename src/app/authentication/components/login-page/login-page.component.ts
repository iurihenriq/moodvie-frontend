import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //
  }

  mostrarSenha = false;

  togglePasswordVisibility() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login() {
    this.service.authenticate(this.loginForm.value).subscribe({
      next: (response: any) => {
        this.router.navigate(['/recommender']).catch(() => alert('Erro!'));
      },
      error: () => {
        alert('USUÁRIO NÃO ENCONTRADO');
      },
    });
  }
}
