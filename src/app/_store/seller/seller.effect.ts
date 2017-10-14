import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';

import {ErrorAction} from '../shared/error/error.action';
import {SellerService} from './seller.service';
import {
  CreateSellerFailAction, CreateSellerSuccessfulAction, GetAllSellersSuccessfulAction,
  SellerActionTypes
} from './seller.action';
import {of} from 'rxjs/observable/of';
import {AuthService} from "../auth/auth.service";
import {INITIAL_SELLER, Seller} from "./seller.model";
import * as _ from 'lodash';
import {AppState} from "../app.state";
import {go} from "@ngrx/router-store";
import "rxjs/add/operator/do";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class SellerEffect {
  seller: Seller = _.cloneDeep(INITIAL_SELLER);

  @Effect() create$: Observable<Action> = this.actions$
    .ofType(SellerActionTypes.CREATE)
    .map((action: Action) => {
      this.seller.email = action.payload.email;
      this.seller.password = action.payload.password;
    })
    .switchMap(() => this.authService.createUserWithEmailAndPassword(this.seller)
      .map((user) => new CreateSellerSuccessfulAction())
      .catch(error => {
        console.log(error);
        return Observable.of(new ErrorAction(error));
      })
    )

  @Effect()
  getAll$: Observable<Action> = this.actions$
    .ofType(SellerActionTypes.GET_ALL)
    .switchMap((action) =>
      this.sellerService.getAll()
        .map((data) => new GetAllSellersSuccessfulAction(data))
        .catch(() => Observable.of(new ErrorAction('[Seller] - Get All Fail')))
    );

  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(SellerActionTypes.UPDATE)
    .switchMap((action) => {
      return of(this.sellerService.update(action.payload));
    })
    .catch(() => Observable.of(new ErrorAction('UPDATE KHONG DUOC !!!')))


  //
  // @Effect()
  // getById$: Observable<Action> = this.actions$
  //   .ofType(SellerActionTypes.GET_BY_ID)
  //   .switchMap((action) =>
  //     this.sellerService.getById(action.payload)
  //       .map((data) => new GetSellerByIdSuccessfulAction(data))
  //       .catch(() => Observable.of(new ErrorAction('GET KHONG DUOC !!!')))
  //   );
  //
  // @Effect()
  // find$: Observable<Action> = this.actions$
  //   .ofType(SellerActionTypes.FIND)
  //   .switchMap((action) =>
  //     this.sellerService.find(action.payload)
  //       .map((data) => new FindSellerSuccessfulAction(data))
  //       .catch(() => Observable.of(new ErrorAction('FIND KHONG DUOC !!!')))
  //   );
  //
  // @Effect()
  // update$: Observable<Action> = this.actions$
  //   .ofType(SellerActionTypes.UPDATE)
  //   .switchMap((action) =>
  //     this.sellerService.update(action.payload)
  //       .catch(() => Observable.of(new ErrorAction('UPDATE KHONG DUOC !!!')))
  //   );
  //
  // @Effect()
  // delete$: Observable<Action> = this.actions$
  //   .ofType(SellerActionTypes.DELETE)
  //   .switchMap((action) =>
  //     this.sellerService.remove(action.payload)
  //       .catch(() => Observable.of(new ErrorAction('DELETE KHONG DUOC !!!')))
  //   );

  constructor(private actions$: Actions,
              private sellerService: SellerService,
              private authService: AuthService,
              private store: Store<AppState>,
              private afAuth: AngularFireAuth) {
  }

}

