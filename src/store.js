import { createStore,combineReducers } from 'redux';
import { productsReducers } from "./reducers/productsReducers";
import { cartInfoReducer } from "./reducers/cartInforeducer";

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
    }

};

 const configureStore = ()=>{
    return createStore(
        combineReducers({
            products:productsReducers,
            cartInfo:cartInfoReducer
        }),
        initialState
    )
};
export  default configureStore