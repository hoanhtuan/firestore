import { Action } from '@ngrx/store';
import { type } from '../utils';

export const ActionTypes = {
  ERROR_ACTION: type('[ERROR] - SOMETHING WRONG HAPPENS'),
  ERROR_RESET_ACTION: type('[ERROR] - CLEAR ALL ERRORS')
};

export class ErrorAction implements Action {
  readonly type = ActionTypes.ERROR_ACTION;
  constructor(public payload?: any) { }
}

export class ResetErrorAction implements Action {
  readonly type = ActionTypes.ERROR_RESET_ACTION;
  constructor(public payload?: any) { }
}
