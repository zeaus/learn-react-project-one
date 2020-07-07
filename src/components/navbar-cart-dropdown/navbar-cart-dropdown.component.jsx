import React from 'react';
import { connect } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';
import { addItemToCart } from '../../redux/cart/cart.reselect';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const NavCartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length > 0 ?
                    (cartItems.map(item => <CartItem key={item.id} item={item} />)) :
                    <div>No items in cart</div>
            }
        </div>
        <button onClick={() => {
            history.push('/learn-react-project-one/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: addItemToCart
})

export default withRouter(connect(mapStateToProps)(NavCartDropdown));