import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {User} from './auth.state';
import {Observable} from 'rxjs/Observable';

import * as userActions from './auth.action';
import {AuthService} from './auth.service';
import {ErrorAction} from "../shared/error/error.action";

export type Action = userActions.All;

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

  /// effects go here

  @Effect()
  getUser: Observable<Action> = this.actions$
    .ofType(userActions.GET_USER)
    .switchMap(() => this.authService.getUser())
    .delay(2000) // delay to show loading spinner, delete me!
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
  login: Observable<Action> = this.actions$.ofType(userActions.EMAIL_LOGIN)
    .map((action: userActions.EmailLogin) => action.payload)
    .switchMap(payload => {
      return Observable.of(this.authService.signInWithEmailAndPassword(payload.email, payload.password));
    })
    .map(credential => {
      // successful login
      return new userActions.GetUser();
    })
    .catch(err => {
      return Observable.of(new ErrorAction(err.message));
    });


  @Effect()
  logout: Observable<Action> = this.actions$.ofType(userActions.LOGOUT)
    .map((action: userActions.Logout) => action.payload)
    .switchMap(payload => {
      return Observable.of(this.authService.signOut());
    })
    .map(authData => {
      return new userActions.NotAuthenticated();
    })
    .catch(err => Observable.of(new userActions.AuthError({error: err.message})));
}
