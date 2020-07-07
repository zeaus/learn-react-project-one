import { cartActionTypes } from '../cart/cart.types'
import { addItemToCartMiddleWare, decreaseItemCartMiddleWare } from '../cart/cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCartMiddleWare(state.cartItems, action.payload)
            }
        case cartActionTypes.DECREASE_CART_ITEM:
            return {
                ...state,
                cartItems: decreaseItemCartMiddleWare(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter
                    (item => item.id !== action.payload.id)
            }


        default:
            return state;
    }
}
