import React from 'react';

export const CardTile = ({ monster }) => (

    <div>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name}/>
        <h1>{monster.name}</h1>
        <h6>{monster.id}</h6>
    </div>
)