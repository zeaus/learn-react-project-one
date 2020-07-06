import {cartActionTypes} from './cart.types'

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
})