import React from 'react';

export const SearchBar = ({placeholder, handleChange}) => (
    <input type="search"
        placeholder={placeholder}
        onChange={handleChange} />
)