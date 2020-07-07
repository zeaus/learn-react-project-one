import React from 'react';
import CategoryCollection from '../category-collection/category-collection.component';
import './shop.styles.scss';
import { withRouter, Route } from 'react-router-dom';
import CategoryOverview from '../category-overview/category-overview.component';

const Shop = ({ match }) => (
    <div className="shop">
        <Route exact path={`${match.path}`} component={CategoryOverview} />
        <Route exact path={`${match.path}/:categoryId`} component={CategoryCollection} />
    </div>
)


export default withRouter(Shop);