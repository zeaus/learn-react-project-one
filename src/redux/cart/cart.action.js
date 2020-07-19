import { cartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const removeItemToCart = (item) => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})
export const decreaseItemToCart = (item) => ({
    type: cartActionTypes.DECREASE_CART_ITEM,
    payload: item
})

export const resetCart = () => ({
    type: cartActionTypes.RESET_CART
})