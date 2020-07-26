export const addItemToCartMiddleWare = (cartItems, newItem) => {
    
    const multiCartItem = cartItems.find(
        item => item.id === newItem.id
    );

    if (multiCartItem) {
        return cartItems.map(item =>
            item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 } : item
        )
    }

    return [...cartItems, { ...newItem, quantity: 1 }]
}

export const decreaseItemCartMiddleWare = (cartItems, itemToRemove) => {

    const multiCartItem = cartItems.find(
        item => item.id === itemToRemove.id
    );

    if (multiCartItem.quantity>1) {
        return cartItems.map(item =>
            item.id === itemToRemove.id
                ? { ...item, quantity: item.quantity - 1 } : item
        )
    }

    return cartItems
}