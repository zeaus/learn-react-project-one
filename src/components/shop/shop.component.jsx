import React from 'react';
import CategoryCollection from '../category-collection/category-collection.component';
import './shop.styles.scss';
import { SHOPDATA } from '../../shop.data';
import { withRouter } from 'react-router-dom';
class Shop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: SHOPDATA.categories
        }
        // console.log(props.match.params.categoryName)
    }

    componentDidMount() {
        // if(this.props.params!=undefined)

    }

    render() {
        return (

            <div className="shop">
                {this.props.match.params.categoryName!=undefined?
                this.state.categories.filter(cat=>cat.title==this.props.match.params.categoryName).map(({ title, id, items }) => <CategoryCollection key={id} title={title} items={items} />)
                :this.state.categories.map(({ title, id, items }) => <CategoryCollection key={id} title={title} items={items} />)}
                
            </div>
        )
    }
}

export default withRouter(Shop)