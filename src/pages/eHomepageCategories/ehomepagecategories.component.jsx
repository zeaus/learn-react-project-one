import React from 'react';
import { SHOPDATA } from '../../shop.data';
import ShopCategory from '../../components/shop-category/shop-category.component'


export class EHomePageCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: SHOPDATA.categories
        }
    }

 
    render() {
        return (
            <div className="shop">
                
                {this.state.categories.map(({ title, imgUrl, id, size }) => <ShopCategory key={id} imgUrl={imgUrl} title={title} size={size} />)}
            </div>
        )
    }
}