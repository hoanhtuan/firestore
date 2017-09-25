import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SellerRegisterComponent} from "./seller-register/seller-register.component";
import {PublicLayoutComponent} from "../_layouts/public-layout/public-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{
      path: 'register',
      component: SellerRegisterComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
