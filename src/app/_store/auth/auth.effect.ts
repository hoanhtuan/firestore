import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {User} from './auth.state';
import {Observable} from 'rxjs/Observable';

import * as userActions from './auth.action';
import {AuthService} from './auth.service';
import {ErrorAction} from "../shared/error/error.action";
import {go} from "@ngrx/router-store";
import {empty} from "rxjs/observable/empty";

export type Action = userActions.All;

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
    .switchMap(action => Observable.of(this.authService.signInWithEmailAndPassword(action.payload.email, action.payload.password)))
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
    .catch(err => {
      return Observable.of(new ErrorAction(err.message));
    })
  ;

  @Effect()
  logout$: Observable<Action> = this.actions$.ofType(userActions.LOGOUT)
    .map((action: userActions.Logout) => action.payload)
    .switchMap(payload => {
      return Observable.of(this.authService.signOut());
    })
    .map(authData => {
      return new userActions.NotAuthenticated();
    })
    .catch(err => Observable.of(new userActions.AuthError({error: err.message})));

  constructor(private actions$: Actions,
              private authService: AuthService) {
  }

}
