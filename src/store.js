import { createStore,combineReducers } from 'redux';
import { productsReducers } from "./reducers/productsReducers";
import { cartInfoReducer } from "./reducers/cartInforeducer";
import { reducerCategories } from "./reducers/reducerCategories";

export const initialState = {
    products:{
          data:[],
          error:null,
          loading:true,
          categoryName:''
    },
    cartInfo:{
        cart:[],
        totalPrice:0,
        cartCount:0
    },
    categories:{}
};

 const configureStore = ()=>{
    return createStore(
        combineReducers({
            products:productsReducers,
            cartInfo:cartInfoReducer,
            categories:reducerCategories
        }),
        initialState
    )
};
export  default configureStore