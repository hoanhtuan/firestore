import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {PublicLayoutComponent} from "../_layouts/public-layout/public-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{
      path: 'login',
      component: LoginPageComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
