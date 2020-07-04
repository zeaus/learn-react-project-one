import React from 'react';
import './shop-category.styles.scss';
import {withRouter, Route} from 'react-router-dom';

const ShopCategory = ({ title, subtitle, imgUrl, size, items, history,match }) => (
    <div 
    className={`${size !=undefined ? size: ''} shop-category`}
        style={
            {
                backgroundImage: `url(${imgUrl})`
            }
        }
        onClick={()=> history.push(`${match.url}shop/${title}`)}
        >
        <div className="inner-content">
            <h1>{title}</h1>
            <span>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(ShopCategory);