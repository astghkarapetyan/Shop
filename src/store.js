import { createStore,combineReducers } from 'redux';
import { productsReducers } from "./reducers/productsReducers";

export const initialState = {
  products:{
      data:[],
      error:null,
      loading:true,
      categoryName:''
  }
};

 const configureStore = ()=>{
    return createStore(
        combineReducers({products:productsReducers}),
        initialState
    )
};
export  default configureStore