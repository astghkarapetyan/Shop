import { initialState } from "../store";
import { CATEGORIS } from "../actions/actionType";

export const reducerCategories = (state = initialState.categories,action)=>{
    switch (action.type) {
        case CATEGORIS:
            state = action.payload;
            state.loading = false;
            return {...state};
        default:
            return state
    }
};