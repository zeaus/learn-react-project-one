
import React from 'react';
import { CardTile } from '../card-tile/card-tile.component';

export class CardContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.filteredMonsters.map(monster =>
                    <CardTile key={monster.id} monster={monster} />
                )}
            </div>)
    }
}