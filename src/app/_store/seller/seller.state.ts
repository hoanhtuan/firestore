import { Seller } from './seller.model';

export interface SellerState {
    sellers: Array <Seller>;
}

export const INITIAL_SELLER_STATE: SellerState = {
    sellers: []
};


