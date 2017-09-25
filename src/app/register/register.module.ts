import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SellerRegisterPageComponent } from './seller-register-page/seller-register-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [
    SellerRegisterPageComponent
  ]
})
export class RegisterModule { }
