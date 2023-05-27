import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  showPassword = false;
  showConfirmPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }

  login() {
    this.service.authenticate(this.registerForm.value).subscribe({
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
