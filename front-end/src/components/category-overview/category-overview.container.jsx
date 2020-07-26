import withLoader from '../with-loader/with-loader.component';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CategoryOverview from './category-overview.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCategoriesFetching } from '../../redux/category/category.reselect';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCategoriesFetching
})


const CategoryOverviewContainer = compose(
    connect(mapStateToProps),
    withLoader
)(CategoryOverview)

export default CategoryOverviewContainer