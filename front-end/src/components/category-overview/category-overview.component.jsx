import React from 'react';
import CategoryCollectionPreview from '../category-collection-preview/category-collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCategories } from '../../redux/category/category.reselect';
import './category-overview.styles.scss';

const CategoryOverview = ({ categories }) => (
    <div className="catOverview">
        {categories.map(({ title, id, items }) => <CategoryCollectionPreview key={id} title={title} items={items} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    categories: selectCategories
})
export default connect(mapStateToProps)(CategoryOverview);