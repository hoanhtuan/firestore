import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import { SellerState, INITIAL_SELLER_STATE } from './seller.state';
import { SellerActionTypes } from './seller.action';

export function sellerReducer(state: SellerState = INITIAL_SELLER_STATE, action: Action): SellerState {

  switch (action.type) {
    // case SellerActionTypes.CREATE: {
    //   const newState = _.cloneDeep(state);
    //   newState.sellers = [...state.sellers, action.payload];
    //   return newState;
    // }

    case SellerActionTypes.GET_ALL_SUCCESSFUL: {
      const newState = _.cloneDeep(state);
      newState.sellers = action.payload;
      return newState;
    }

    case SellerActionTypes.GET_BY_ID_SUCCESSFUL: {
      const newState = _.cloneDeep(state);
      newState.sellers = [...state.sellers, action.payload];
      return newState;
    }

    default:
      return state;
  }
}

