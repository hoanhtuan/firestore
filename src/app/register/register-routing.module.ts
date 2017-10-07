import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SimpleLayoutComponent} from "../_layouts/simple-layout/simple-layout.component";
import {SellerRegisterPageComponent} from "./seller-register-page/seller-register-page.component";

const routes: Routes = [
  {
    path: 'seller_register',
    component: SimpleLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full',
      },
      {
        path: ':partialInfo',
        component: SellerRegisterPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
}
