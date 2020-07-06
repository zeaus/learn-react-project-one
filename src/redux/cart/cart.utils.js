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