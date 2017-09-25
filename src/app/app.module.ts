import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppStoreModule} from './_store/store.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './_layouts/ui-elements/nav-bar/nav-bar.component';
import { FooterComponent } from './_layouts/ui-elements/footer/footer.component';
import { SimpleLayoutComponent } from './_layouts/simple-layout/simple-layout.component';
import {RegisterModule} from "./register/register.module";

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    SimpleLayoutComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'amex'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppStoreModule,
    AuthModule,
    RegisterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
