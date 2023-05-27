import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

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

  ngOnInit(): void {}

  mostrarSenha = false;

  togglePasswordVisibility() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login() {
    this.service.authenticate(this.loginForm.value).subscribe({
      next: (response: any) => {
        alert('token obtido:' + response.token);
        this.router.navigate(['/recommender']);
      },
      error: () => {
        alert('USUÁRIO NÃO ENCONTRADO');
      },
    });
  }
}
