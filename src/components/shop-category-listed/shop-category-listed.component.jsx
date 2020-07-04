import React from 'react';
import './shop-category.styles.scss';
import CategoryCollection from '../category-collection/category-collection.component'
import {withRouter, Route} from 'react-router-dom';

const ShopCategoryListed = ({ title, subtitle, imgUrl, size, items, history,match }) => (
    <div 
    className={`${size !=undefined ? size: ''} shop-category`}
        style={
            {
                backgroundImage: `url(${imgUrl})`
            }
        }
        onClick={()=> history.push(`${match.url}/${title}`)}
        >
        <div className="inner-content">
            <h1>{title}</h1>
            <span>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(ShopCategoryListed);