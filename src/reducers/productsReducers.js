import { initialState } from "../store";
import { PRODUCTS,PRODUCTSREQUESTED } from "../actions/actionType";

export const productsReducers = (state = initialState.products,action)=>{
    switch (action.type) {
        case PRODUCTS:
            state.data = action.payload;
            state.loading = false;
            state.categoryName = action.categoryName;
            return {...state};
        case PRODUCTSREQUESTED:
            state  = {
                ...state,
                loading:true
            };
            return state;
        default:
            return state
    }
};