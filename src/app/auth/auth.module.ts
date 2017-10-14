import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import {Ng4LoadingSpinnerService} from "ng4-loading-spinner";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [LoginPageComponent, LoginFormComponent],
  providers: [Ng4LoadingSpinnerService]
})
export class AuthModule { }
