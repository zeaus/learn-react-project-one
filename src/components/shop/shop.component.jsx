import React from 'react';
import CategoryCollection from '../category-collection/category-collection.component';
import './shop.styles.scss';
import { withRouter, Route } from 'react-router-dom';
import CategoryOverview from '../category-overview/category-overview.component';
import { firestore, getCategories } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { updateCategories } from '../../redux/category/category.action';
import withLoader from '../with-loader/with-loader.component';

const CategoryOverviewWithSpinner = withLoader(CategoryOverview);
const CategoryCollectionWithSpinner = withLoader(CategoryCollection)
class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const categoryRef = firestore.collection('categories');
        categoryRef.onSnapshot(async snapshot => {
            console.log(snapshot);
            const categoriesObject = getCategories(snapshot);
            this.props.updateCategories(categoriesObject);
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop">
                <Route exact path={`${match.path}`} render={(props) => <CategoryOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route exact path={`${match.path}/:categoryId`} render={(props) => <CategoryCollectionWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCategories: categoriesObject => dispatch(updateCategories(categoriesObject))
})

export default connect(null, mapDispatchToProps)(withRouter(Shop));