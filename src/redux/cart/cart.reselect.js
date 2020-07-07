import { createSelector } from 'reselect';

const selectCart = state => state.cart; //input selector

export const addItemToCart = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const decreaseItemToCart = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const removeItemToCart = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)


export const selectCartItemCount = createSelector(
    [addItemToCart],
    cartItems =>
        cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
)

export const selectCartItemTotal = createSelector(
    [addItemToCart],
    cartItems =>
        cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0)
)


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
