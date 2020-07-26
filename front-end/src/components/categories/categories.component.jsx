import React from 'react';
import ShopCategory from '../shop-category/shop-category.component'
export const Categories = ({ categories }) => (
    <div className="shop">
        {categories.map(({ title, imgUrl, id, size }) => <ShopCategory key={id} imgUrl={imgUrl} title={title} size={size} />) }
    </div>
)