import React from 'react';
import './shop-category.styles.scss';
import { withRouter } from 'react-router-dom';

const ShopCategory = ({ title, subtitle, imgUrl, size, history, match }) => (
    <div
        className={`${size !== undefined ? size : ''} shop-category`}
        style={
            {
                backgroundImage: `url(${imgUrl})`
            }
        }
        onClick={() => history.push(`${match.url}shop/${title}`)}
    >
        <div className="inner-content">
            <span>{title}</span>
            <span>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(ShopCategory);