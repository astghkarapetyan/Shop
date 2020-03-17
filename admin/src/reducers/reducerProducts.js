import { initialState } from "../store";
import { PRODUCTS } from "../actions/actionType";
import {PRODUCTSREQUESTED,ADDONEPRODUCT} from "../actions/actionType";

export const reducerProducts = (state = initialState.products,action)=>{
    switch (action.type) {
        case PRODUCTS:
            state.data = action.payload;
            state.loading = false;
            return {...state};
        case PRODUCTSREQUESTED:
            return {
                ...state,
                loading:true
            };
        case ADDONEPRODUCT:

            let  data  = [...state.data];
            if(data.length){
                data.unshift(action.payload);
                if(data.length>10){
                    data = data.slice(0,data.length-1)
                }

            }
            state.data = data;
            return {
                ...state
            };
        default:
            return state
    }
};