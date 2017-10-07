import {Component, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Store} from '@ngrx/store';
import {INITIAL_SELLER} from './_store/seller/seller.model';
import {EmailLogin, Logout} from './_store/auth/auth.action';
import {AuthState} from './_store/auth/auth.state';
import {NavigationStart, Router} from "@angular/router";
import {ResetErrorAction} from "./_store/shared/error/error.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  seller = INITIAL_SELLER;

  constructor(auth: AngularFireAuth,
              db: AngularFireDatabase,
              private store: Store<AuthState>,
              private router: Router) {

    router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.store.dispatch(new ResetErrorAction());
      }
    });

  }

}
