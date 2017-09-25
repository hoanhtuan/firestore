import { Action } from '@ngrx/store';
import * as error from './error.action';
import * as _ from 'lodash';
import { ErrorState, INITIAL_ERROR_STATE } from './error.state';


export function errorReducer(state: ErrorState = INITIAL_ERROR_STATE, action: Action): ErrorState {

  switch (action.type) {
    case error.ActionTypes.ERROR_ACTION: return handleErrorAction(state, action);
    case error.ActionTypes.ERROR_RESET_ACTION: return handleResetErrorAction(state, action);
    default: return state;
  }

}

function handleErrorAction(state: ErrorState, action: Action) {
  const newState = _.cloneDeep(state);
  newState.errorMessage = action.payload;

  return newState;
}

function handleResetErrorAction(state: ErrorState, action: Action) {
  const newState = _.cloneDeep(state);
  newState.errorMessage = '';

  return newState;
}
