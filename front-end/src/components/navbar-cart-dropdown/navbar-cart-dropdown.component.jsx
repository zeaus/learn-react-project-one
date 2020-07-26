import React from 'react';
import { connect } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';
import { addItemToCart } from '../../redux/cart/cart.reselect';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden, resetCart } from '../../redux/cart/cart.action';
import './navbar-cart-dropdown.scss';
const NavCartDropdown = ({ cartItems, history, resetCart, toggleCartHidden }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length > 0 ?
                    (cartItems.map(item => <CartItem key={item.id} item={item} />)) :
                    <div className='empty-cart'>No items in cart</div>
            }
        </div>
        <button onClick={() => {
            if (cartItems.length > 0) {
                resetCart();
            }
        }}>Empty Cart</button>
        <button onClick={() => {
            if (cartItems.length > 0) {
                history.push('/learn-react-project-one/checkout');
                toggleCartHidden();
            }
        }}>GO TO CHECKOUT</button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: addItemToCart
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    resetCart: () => dispatch(resetCart())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavCartDropdown));