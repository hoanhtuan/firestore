import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { SellerRegisterPageComponent } from './seller-register-page/seller-register-page.component';
import {FormsModule} from "@angular/forms";
import { SellerRegisterAccountFormComponent } from './seller-register-page/seller-account-form/seller-account-form.component';
import { SellerRegisterContactFormComponent } from './seller-register-page/seller-contact-form/seller-contact-form.component';
import { SellerAdditionalInformationFormComponent } from './seller-register-page/seller-additional-information-form/seller-additional-information-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [
    SellerRegisterPageComponent,
    SellerRegisterAccountFormComponent,
    SellerRegisterContactFormComponent,
    SellerAdditionalInformationFormComponent
  ]
})
export class RegisterModule { }
