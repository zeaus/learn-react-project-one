import React from 'react';
import { withRouter } from 'react-router-dom';
import CategoryItem from '../category-item/category-item.component'

const CategoryCollection = ({ title, history, match, items,location }) => (
    <div className="catCollection">
        {/* {console.log(match.params)} */}
        <div
            className='category-collection'>
            <h1 onClick={() => {
                if(match.params.categoryName == undefined) {
                    history.push(`${match.url}${title}`)
                }
                // else {
                //     history.goBack()
                // }
            } }>{title}</h1>
            {items.map((item) => <CategoryItem key={item.id} item={item}/>)}

        </div>
    </div>
)

export default withRouter(CategoryCollection);