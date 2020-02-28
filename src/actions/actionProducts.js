import { PRODUCTS } from "./actionType";

export const actionProducts = (data,categoryName)=>({
    type:PRODUCTS,
    payload:data,
    categoryName
});