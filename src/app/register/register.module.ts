import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {SellerRegisterComponent} from "./seller-register/seller-register.component";

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  declarations: [
    SellerRegisterComponent
  ]
})
export class RegisterModule { }
