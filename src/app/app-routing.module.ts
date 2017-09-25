import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PublicLayoutComponent} from './_layouts/public-layout/public-layout.component';


const routes: Routes = [
  {
    path: 'home',
    component: PublicLayoutComponent,
    children: [{
      path: '',
      component: HomePageComponent
    }]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
