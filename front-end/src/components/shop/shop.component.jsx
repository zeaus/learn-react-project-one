import React from 'react';
import './shop.styles.scss';
import { withRouter, Route } from 'react-router-dom';
import CategoryOverviewContainer from '../category-overview/category-overview.container';
import { fetchCategoriesStartAsync } from '../../redux/category/category.action';
import { connect } from 'react-redux';
import CategoryCollectionContainer from '../category-collection/category-collection.container';
class Shop extends React.Component {
    componentDidMount() {
        const { fetchCategoriesStartAsync } = this.props
        fetchCategoriesStartAsync()
    }
    render() {
        const { match } = this.props;
        return (
            <div className="shop">
                <Route exact path={`${match.path}`} component={CategoryOverviewContainer} />
                <Route exact path={`${match.path}/:categoryId`} component={CategoryCollectionContainer} />
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCategoriesStartAsync: () => dispatch(fetchCategoriesStartAsync())
})

export default connect(null, mapDispatchToProps)(withRouter(Shop));