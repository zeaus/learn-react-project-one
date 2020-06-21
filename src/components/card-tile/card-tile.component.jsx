import React from 'react';

export class CardTile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <h1>{this.props.monster.name}</h1>
            <h6>{this.props.monster.id}</h6>
        </div>
        )
    }
}