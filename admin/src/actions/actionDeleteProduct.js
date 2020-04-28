import { DELETEPRODUCT } from "./actionType";

export const actionDeleteProduct = (id)=>({
    type:DELETEPRODUCT,
    payload:id
});