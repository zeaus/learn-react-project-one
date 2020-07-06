import React from 'react';
import { connect  } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';

const NavCartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(item => <CartItem item={item}/>)
            }
        </div>
        <button>GO TO CHECKOUT</button>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(NavCartDropdown)