import React from 'react';
import { connect } from 'react-redux';
import { removeItemToCart, decreaseItemToCart, addItemToCart } from '../../redux/cart/cart.action';

const CheckoutItem = ({ item, removeItemToCart, decreaseItemToCart, addItemToCart }) => {
    const { title, quantity, price, imgURL } = item;
    return (<div className='checkoutItem'>
        <div className='imageContainer'>
            <img src={imgURL} alt="" />
        </div>
        <span className='name'>{title}</span>
        <span className='quantity'>
            <span onClick={() => decreaseItemToCart(item)}>&#10094;</span>
            {quantity}
            <span onClick={() => addItemToCart(item)}>&#10095;</span>
        </span>
        <span className='price'>{price}</span>
        <span className='remove' onClick={() => removeItemToCart(item)}>&#10005;</span>
    </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemToCart: item => dispatch(removeItemToCart(item)),
    decreaseItemToCart: item => dispatch(decreaseItemToCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)