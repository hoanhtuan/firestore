import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';

import {ErrorAction} from '../shared/error/error.action';
import {SellerService} from './seller.service';
import {CreateSellerSuccessfulAction, GetAllSellersSuccessfulAction, SellerActionTypes} from './seller.action';
import {of} from 'rxjs/observable/of';
import {AuthService} from "../auth/auth.service";
import {INITIAL_SELLER, Seller} from "./seller.model";
import * as _ from 'lodash';
import {AppState} from "../app.state";
import {go} from "@ngrx/router-store";

@Injectable()
export class SellerEffect {
  tempSeller: Seller = INITIAL_SELLER;

  @Effect() create$ = this.actions$
    .ofType(SellerActionTypes.CREATE)
    .map((action) => {
      this.tempSeller = action.payload;
      return action.payload;
    })
    .switchMap((payload) =>
      this.sellerService.createUserWithEmailAndPassword(payload)
        .switchMap((result) => result)
        .switchMap(() => this.authService.signInWithEmailAndPassword(this.tempSeller.email, this.tempSeller.password))
        .switchMap(() => this.authService.getUser())
        .switchMap((user) => {
          const newTempSeller: Seller = _.cloneDeep(this.tempSeller);
          newTempSeller.seller_uid = user.uid;
          newTempSeller.password = '';
          return this.sellerService.update(newTempSeller);
        })
        .switchMap((user) =>{
          this.store.dispatch(go(['home']))
          return Observable.of(new CreateSellerSuccessfulAction(user))
        })
        .catch(error => {
          this.store.dispatch(go(['seller_register/account']));
          return Observable.of(new ErrorAction(error))
        })
    );

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
              private store: Store<AppState>) {
  }

}

