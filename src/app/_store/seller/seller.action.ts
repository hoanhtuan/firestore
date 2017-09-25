import { Action } from '@ngrx/store';
import { type } from '../shared/utils';
import { Seller } from './seller.model';

export const SellerActionTypes = {

    CREATE:               type('[SELLER]:Create'),
    CREATE_SUCCESSFUL:    type('[SELLER]:Create successfully'),
    CREATE_FAIL:          type('[SELLER]:Create failed'),

    GET_ALL:              type('[SELLER]:Get all'),
    GET_ALL_SUCCESSFUL:   type('[SELLER]:Get all successfully'),
    GET_ALL_FAIL:         type('[SELLER]:Get all failed'),

    GET_BY_ID:            type('[SELLER]:Get by id'),
    GET_BY_ID_SUCCESSFUL: type('[SELLER]:Get by id successfully'),
    GET_BY_ID_FAIL:       type('[SELLER]:Get by id failed'),

    FIND:                 type('[SELLER]:Find'),
    FIND_SUCCESSFUL:      type('[SELLER]:Find successfully'),
    FIND_FAIL:            type('[SELLER]:Find failed'),

    UPDATE:               type('[SELLER]:Update'),
    UPDATE_SUCCESSFUL:    type('[SELLER]:Update successfully'),
    UPDATE_FAIL:          type('[SELLER]:Update failed'),

    DELETE:               type('[SELLER]:Delete'),
    DELETE_SUCCESSFUL:    type('[SELLER]:Delete successfully'),
    DELETE_FAIL:          type('[SELLER]:Delete failed'),

};

export class CreateSellerAction implements Action {
    readonly type = SellerActionTypes.CREATE;

    constructor(public payload: Seller) { }
}

export class CreateSellerSuccessfulAction implements Action {
    readonly type = SellerActionTypes.CREATE_SUCCESSFUL;

    constructor(public payload?: any) { }
}

export class CreateSellerFailAction implements Action {
    readonly type = SellerActionTypes.CREATE_FAIL;

    constructor(public payload?: any) { }
}

export class GetAllSellersAction implements Action {
    readonly type = SellerActionTypes.GET_ALL;

    constructor(public payload?: any) { }
}

export class GetAllSellersSuccessfulAction implements Action {
    readonly type = SellerActionTypes.GET_ALL_SUCCESSFUL;

    constructor(public payload?: Array<Seller>) { }
}

export class GetAllSellersFailAction implements Action {
    readonly type = SellerActionTypes.GET_ALL_FAIL;

    constructor(public payload?: any) { }
}

export class GetSellerByIdAction implements Action {
    readonly type = SellerActionTypes.GET_BY_ID;

    constructor(public payload: string) { }
}

export class GetSellerByIdSuccessfulAction implements Action {
    readonly type = SellerActionTypes.GET_BY_ID_SUCCESSFUL;

    constructor(public payload?: Seller) { }
}

export class GetSellerByIdFailAction implements Action {
    readonly type = SellerActionTypes.GET_BY_ID_FAIL;

    constructor(public payload?: any) { }
}

export class FindSellerAction implements Action {
    readonly type = SellerActionTypes.FIND;

    constructor(public payload: string) { }
}

export class FindSellerSuccessfulAction implements Action {
    readonly type = SellerActionTypes.FIND_SUCCESSFUL;

    constructor(public payload?: Array<Seller>) { }
}

export class FindSellerFailAction implements Action {
    readonly type = SellerActionTypes.FIND_FAIL;

    constructor(public payload?: any) { }
}

export class UpdateSellerAction implements Action {
    readonly type = SellerActionTypes.UPDATE;

    constructor(public payload: Seller) { }
}

export class UpdateSellerSuccessfulAction implements Action {
    readonly type = SellerActionTypes.UPDATE_SUCCESSFUL;

    constructor(public payload?: any) { }
}

export class UpdateSellerFailAction implements Action {
    readonly type = SellerActionTypes.UPDATE_FAIL;

    constructor(public payload?: any) { }
}

export class DeleteSellerAction implements Action {
    readonly type = SellerActionTypes.DELETE;

    constructor(public payload?: string) { }
}

export class DeleteSellerSuccessfulAction implements Action {
    readonly type = SellerActionTypes.DELETE_SUCCESSFUL;

    constructor(public payload?: any) { }
}

export class DeleteSellerFailAction implements Action {
    readonly type = SellerActionTypes.DELETE_FAIL;

    constructor(public payload?: any) { }
}
