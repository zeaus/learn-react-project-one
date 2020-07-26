import React from 'react';
import './cart-item.styles.scss';

export const CartItem = ({ item: { title, price, imgUrl,quantity } }) => (
    <div className='cartItem'>
        <img src={imgUrl} alt="Cart Item" />
        <div className="itemDetails">
            <span className='name'>{title}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
)