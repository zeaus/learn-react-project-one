
import React from 'react';
import { CardTile } from '../card-tile/card-tile.component';

export const CardContainer = ({filteredMonsters}) => (
    <div>
        {filteredMonsters.map(monster =>
            <CardTile key={monster.id} monster={monster} />
        )}
    </div>
)
