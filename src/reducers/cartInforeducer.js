import { initialState } from "../store";
import {
    ADDTOCART_COUNT,
    REMOVETOCART_COUNT,
    REMOVEPRODUCTTOCART_COUNT,
    REMOVEALLPRODUCTTOCART_COUNT
} from "../actions/actionType";


const updateCartItemPordz = (cartItem = {},product,quantity)=>{
    const {
        product_id = product.product_id,
        name = product.name,
        images = product.images,
        count = 0,
        price = 0
    } = cartItem;
    console.log(cartItem,'cartItem')
    let newPrice = count>0 ? cartItem.price/count : product.price;
    const newCount = count + quantity;
    const finalPrice = newCount !== 0  ? price + quantity*newPrice : newPrice ;
    console.log(finalPrice,'finalPrice11111111111')
    return {
        product_id,
        name,
        images,
        count:newCount,
        price:finalPrice
    }


};

const updateCartItemsPordz = (state,cartItemIndex,newItem,quantity)=>{
    const { cart,totalPrice,cartCount} = state;
    let newCartCount = newItem.count > 0 ? cartCount +  quantity : 0;
    if(newItem.count <=0){
        return {
            totalPrice:totalPrice - (Math.abs(quantity) * newItem.price),
            cartCount:newCartCount,
            cart:[
                ...cart.slice(0,cartItemIndex),
                ...cart.slice(cartItemIndex + 1)
            ]
        }
    }
    const { count,price} = newItem;
    let newPrice = count>0 ? price/count : price;

    if(cartItemIndex === -1){
        return {
            totalPrice:totalPrice +  quantity*newPrice,
            cartCount:newCartCount,
            cart:[
                newItem,
                ...cart
            ]
        }
    }
    return {
        totalPrice:totalPrice +  quantity*newPrice,
        cartCount:newCartCount,
        cart:[
            ...cart.slice(0,cartItemIndex),
            newItem,
            ...cart.slice(cartItemIndex +1)
        ]
    }
};

const updateCartPordz = (state,product,quantity)=>{
    const { cart } = state;
    const cartItemIndex = cart.findIndex(({product_id})=> product_id === product.product_id);
    const cartItem = cart[cartItemIndex];

    const newItem = updateCartItemPordz(cartItem,product,quantity);

    return updateCartItemsPordz(state,cartItemIndex,newItem,quantity)

};

export const cartInfoReducer = (state = initialState.cartInfo,action)=>{
    switch (action.type) {
        case ADDTOCART_COUNT:
            const add_product = action.payload;
            return updateCartPordz(state,add_product,1);
        case REMOVETOCART_COUNT:
            const remove_product = action.payload;
            return updateCartPordz(state,remove_product,-1);
        case REMOVEPRODUCTTOCART_COUNT:
            const { cart } = state;
            const remove_one_product = action.payload;
            const findProduct = cart.find(({product_id})=> product_id === remove_one_product.product_id);
            const count = findProduct.count;
            return updateCartPordz(state,remove_one_product,-count);
        case REMOVEALLPRODUCTTOCART_COUNT:
            return {
                cart:[],
                totalPrice:0,
                cartCount:0
            };
        default:
            return state
    }
};