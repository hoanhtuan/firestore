import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PublicLayoutComponent} from './_layouts/public-layout/public-layout.component';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [{
      path: 'main',
      component: HomePageComponent
    }]
  },
  // {
  //   path: '',
  //   redirectTo: 'main',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: 'main',
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
