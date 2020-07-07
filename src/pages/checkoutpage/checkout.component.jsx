import React from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.reselect';
import { selectCartItemTotal } from '../../redux/cart/cart.reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkoutPage'>
        <div className="checkoutHeader">
            <div className="headerBlock"><span>Producut</span></div>
            <div className="headerBlock"><span>Description</span></div>
            <div className="headerBlock"><span>Quantity</span></div>
            <div className="headerBlock"><span>Price</span></div>
            <div className="headerBlock"><span>Remove</span></div>
        </div>

        {
            cartItems.length > 0 ?
                (cartItems.map(item => <CheckoutItem key={item.id} item={item} />)) :
                <div>No Item in Cart</div>}
        <div className='total'>TOTAL: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: addItemToCart,
    total: selectCartItemTotal
})

export default connect(mapStateToProps, null)(CheckoutPage)