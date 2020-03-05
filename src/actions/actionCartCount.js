
export const actionCartCount = (type,product)=>({
    type,
    payload:product ? product :null
});