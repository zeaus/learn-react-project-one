import React from 'react';
// import './shop-category.styles.scss';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action'
import './category-item.styles.scss';
const ShopCategory = ({ history, match, item, addItemToCart }) => {
    const { title, subtitle, imgUrl, category, price, id } = item
    return (
        <div
            className={`category-item`}
            style={
                {
                    backgroundImage: `url(${imgUrl})`
                }
            }
        // onClick={() => {
        //     if (match.params.categoryName == undefined) {
        //         history.push(`${match.url}${category}/${id}`)
        //     }
        //     else {
        //         history.push(`${match.url}/${id}`)
        //     }
        // }}
        >
            {/* {console.log('categoryitem', match, location, history)} */}
            <div className="inner-content">
                <span>{title}</span>
                <span>{subtitle}</span>
                <span>{price}</span>

                <button onClick={() => addItemToCart(item)}>Add to Cart</button>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(withRouter(ShopCategory));