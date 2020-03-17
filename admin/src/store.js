import { createStore,combineReducers } from 'redux';
import { reducerProducts } from "./reducers/reducerProducts";
import { reducerCategories } from "./reducers/reducerCategories";

export const initialState = {
    products:{
        data:[],
        error:null,
        loading:true
    },
    categories:{}
};

const configureStore = ()=>{
    return createStore(
        combineReducers({
            products:reducerProducts,
            categories:reducerCategories
        }),
        initialState
    )
};
export  default configureStore;