

import React from 'react';
import { withRouter } from 'react-router-dom';
import CategoryItem from '../category-item/category-item.component'
// contains the category and top 2 items of that category 
const CategoryCollectionPreview = ({ title, history, match, items, location }) => (
    <div
        className='category-collection'>
        <h1 onClick={() => {
            if (match.params.categoryName === undefined) {
                history.push(`${match.url}/${title}`)
            }
            // else {
            //     history.goBack()
            // }
        }}>{title}</h1>
        {items.filter((item, idx) => idx < 2).map((item) => <CategoryItem key={item.id} item={item} />)}

    </div>
)

export default withRouter(CategoryCollectionPreview);