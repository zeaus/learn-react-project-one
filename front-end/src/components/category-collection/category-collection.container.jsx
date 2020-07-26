import CategoryCollection from './category-collection.component';
import { connect } from 'react-redux';
import withLoader from '../with-loader/with-loader.component';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCategoriesFetching } from '../../redux/category/category.reselect';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCategoriesFetching
})


const CategoryCollectionContainer = connect(mapStateToProps)(withLoader(CategoryCollection))

export default CategoryCollectionContainer