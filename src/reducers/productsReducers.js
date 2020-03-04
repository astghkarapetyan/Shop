import { initialState } from "../store";
import { PRODUCTS,PRODUCTSREQUESTED,CARTCOUNT} from "../actions/actionType";

export const productsReducers = (state = initialState.products,action)=>{
    switch (action.type) {
        case PRODUCTS:
            state.data = action.payload;
            state.loading = false;
            state.categoryName = action.categoryName;
            return {...state};
        case PRODUCTSREQUESTED:
            return {
                ...state,
                loading:true
            };
        default:
            return state
    }
};