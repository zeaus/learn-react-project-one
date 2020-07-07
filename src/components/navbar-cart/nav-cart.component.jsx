import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/svgs/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItemCount } from '../../redux/cart/cart.reselect'
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

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(NavCart);