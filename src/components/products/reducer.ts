import {ProductActions, ProductsActionTypes, ProductsState} from './types';

const initialState : ProductsState = {
    products: [],
    last_page: 0
}

export const productsReducer = (state = initialState, action: ProductActions) : ProductsState => {
    switch(action.type) {

        case ProductsActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                last_page: action.payload.last_page
            };
        default:
            return state;
    }
    
}