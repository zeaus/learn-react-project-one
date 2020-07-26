import React, { useEffect } from 'react';
import ShopCategory from '../../components/shop-category/shop-category.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCategoriesFetching, selectCategories } from '../../redux/category/category.reselect';
import { fetchCategoriesStartAsync } from '../../redux/category/category.action';
import withLoader from '../../components/with-loader/with-loader.component';
import { Categories } from '../../components/categories/categories.component';

const CategoriesWithLoader = withLoader(Categories)
const EHomePageCategory = ({ categories, fetchCategoriesStartAsync, isCategoriesFetching }) => {
    useEffect(() => {
        fetchCategoriesStartAsync()
    }, [])
    return (
        <CategoriesWithLoader categories={categories} isLoading={isCategoriesFetching} />
    )
}

const mapStateToProps = createStructuredSelector({
    isCategoriesFetching: selectIsCategoriesFetching,
    categories: selectCategories
})

const mapDispatchToProps = dispatch => ({
    fetchCategoriesStartAsync: () => dispatch(fetchCategoriesStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(EHomePageCategory);