import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {User} from './auth.state';
import {Observable} from 'rxjs/Observable';

import * as userActions from './auth.action';
import {AuthService} from './auth.service';
import {ErrorAction} from "../shared/error/error.action";
import {Action} from "@ngrx/store";

//export type Action = userActions.All;

@Injectable()
export class AuthEffect {

  @Effect()
  getUser$: Observable<Action> = this.actions$
    .ofType(userActions.GET_USER)
    .switchMap(() => this.authService.getUser())
    .map(authData => {
      if (authData) {
        /// User logged in
        const user = new User(authData.uid, authData.displayName);
        return new userActions.Authenticated(user);
      } else {
        /// User not logged in
        return new userActions.NotAuthenticated();
      }
    })
    .catch(err => Observable.of(new userActions.AuthError()));

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(userActions.EMAIL_LOGIN)
    .switchMap(action => this.authService.signInWithEmailAndPassword(action.payload.email, action.payload.password)
      .switchMap(() => this.authService.getUser()
        .map(authData => {
          if (authData) {
            /// User logged in
            const user = new User(authData.uid, authData.displayName);
            return new userActions.Authenticated(user);
          }
        }))
      .catch(err => {
        console.log('login error')
        return Observable.of(new ErrorAction(err));
      })
    )

  @Effect()
  logout$: Observable<Action> = this.actions$
    .ofType(userActions.LOGOUT)
    .switchMap(() => this.authService.signOut())
    .map(() => new userActions.NotAuthenticated());

    //.catch(err => Observable.of(new userActions.AuthError({error: err.message})));

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

}
