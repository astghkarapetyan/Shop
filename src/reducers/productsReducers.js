import { initialState } from "../store";
import { PRODUCTS } from "../actions/actionType";

export const productsReducers = (state = initialState.products,action)=>{
    switch (action.type) {
        case PRODUCTS:
            return state;
        default:
            return state
    }
};