import React from 'react';
// import './shop-category.styles.scss';
import { withRouter, Route } from 'react-router-dom';

const ShopCategory = ({ title, subtitle, imgUrl, size, items, id, history, location, match,category }) => (
    <div
        className={`category-item`}
        style={
            {
                backgroundImage: `url(${imgUrl})`
            }
        }
        onClick={() => {
            if (match.params.categoryName == undefined) {
                history.push(`${match.url}${category}/${id}`)
            }
            else {
                history.push(`${match.url}/${id}`)
            }
        }}
    >
        {/* {console.log('categoryitem', match, location, history)} */}
        <div className="inner-content">
            <h1>{title}</h1>
            <span>{subtitle}</span>
        </div>
    </div>
)

export default withRouter(ShopCategory);