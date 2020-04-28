import { initialState } from "../store";
import {PRODUCTSREQUESTED,ADDONEPRODUCT,DELETEPRODUCT,PRODUCTS} from "../actions/actionType";

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
        case DELETEPRODUCT:
            const newData = state.data.filter(({product_id}) => product_id !== action.payload);
            state.data = newData;
            return {
                ...state
            };
        default:
            return state
    }
};