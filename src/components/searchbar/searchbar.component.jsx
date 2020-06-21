import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<input type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.handleChange} />
        )
    }
}