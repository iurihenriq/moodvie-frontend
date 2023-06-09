import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../../components/login-page/login-page.component';
import { LayoutRoutingModule } from 'src/app/layout/layout-routing/layout-routing.module';
import { MaterialModule } from 'src/app/shared/material-module/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from '../../components/register-page/register-page.component';


@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
