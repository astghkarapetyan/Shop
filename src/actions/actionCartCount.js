
export const actionCartCount = (type,id)=>({
    type,
    payload:id ? id :null
});