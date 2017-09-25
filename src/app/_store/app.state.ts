import {RouterState} from '@ngrx/router-store';
import {ErrorState, INITIAL_ERROR_STATE} from './shared/error/error.state';
import {INITIAL_SELLER_STATE, SellerState} from './seller/seller.state';
import {AuthState, INITIAL_AUTH_STATE} from './auth/auth.state';

export interface AppState {
  routerState: RouterState;
  errorState: ErrorState;
  authState: AuthState;
  sellerState: SellerState;

}

export const INITIAL_APP_STATE: AppState = {
  routerState: {path: window.location.pathname + window.location.search},
  errorState: INITIAL_ERROR_STATE,
  authState: INITIAL_AUTH_STATE,
  sellerState: INITIAL_SELLER_STATE
};

