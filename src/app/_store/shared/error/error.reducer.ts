import { Action } from '@ngrx/store';
import * as error from './error.action';
import * as _ from 'lodash';
import { ErrorState, INITIAL_ERROR_STATE } from './error.state';


export function errorReducer(state: ErrorState = INITIAL_ERROR_STATE, action: Action): ErrorState {

  switch (action.type) {
    case error.ActionTypes.ERROR_ACTION: return handleErrorAction(state, action);
    default: return handleResetErrorAction (state, action);
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
