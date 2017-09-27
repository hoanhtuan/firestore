import {combineReducers} from '@ngrx/store';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';
import {routerReducer} from '@ngrx/router-store';
import {storeLogger} from 'ngrx-store-logger';
import {localStorageSync} from 'ngrx-store-localstorage';
import {sellerReducer} from './seller/seller.reducer';
import {authReducer} from './auth/auth.reducer';
import {errorReducer} from "./shared/error/error.reducer";

const reducers = compose(storeFreeze,
  localStorageSync({
    rehydrate: true,
    storage: localStorage,
    keys: []
  }),
  storeLogger(),
  combineReducers)(
  {
    //List all reducers which are used in app. For example --> userState: userReducer
    routerReducer: routerReducer,
    sellerState: sellerReducer,
    authState: authReducer,
    errorState: errorReducer
  });

// This is required for AOT
export function appReducer(state: any, action: any) {
  return reducers(state, action);
}


