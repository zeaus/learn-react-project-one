import React from 'react';
import { SHOPDATA } from '../../shop.data';
import ShopCategory from '../../components/shop-category/shop-category.component'
import { connect } from 'react-redux';
import { selectCategories } from '../../redux/category/category.reselect'
import { createStructuredSelector } from 'reselect'
const EHomePageCategory = ({ categories }) => (
    <div className="shop">
        {console.log('categories',categories)}
        {categories.map(({ title, imgUrl, id, size }) => <ShopCategory key={id} imgUrl={imgUrl} title={title} size={size} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    categories: selectCategories
})

export default connect(mapStateToProps)(EHomePageCategory);