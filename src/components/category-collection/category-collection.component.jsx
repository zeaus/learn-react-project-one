import React from 'react';
import { withRouter } from 'react-router-dom';
import CategoryItem from '../category-item/category-item.component'
import { selectCategory } from '../../redux/category/category.reselect';
import { connect } from 'react-redux';

// contains category title and items
const CategoryCollection = ({ category, history, match, location }) => {
    debugger
    const { title, items } = category;
    return (
        < div className="catCollection" >
            <div
                className='category-collection'>
                <h1 onClick={() => {
                    if (match.params.categoryName == undefined) {
                        history.push(`${match.url}/${title}`)
                    }
                }}>
                    {title}
                </h1>
                {items.map((item) => <CategoryItem key={item.id} item={item} />)}

            </div>
        </div >
    )
}
const mapStateToProps = (state, ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(withRouter(CategoryCollection));