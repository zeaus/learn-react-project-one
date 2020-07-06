import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/svgs/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

const NavCart = ({ toggleCartHidden, itemCount }) => (
    <div className='navCartWrapper' onClick={toggleCartHidden}>
        <ShoppingIcon className='cartIcon' />
        <span className='itemCount'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCart);