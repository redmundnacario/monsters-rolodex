import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({placeholder,handlechange }) => {
    return (
        <input
            className="search-box"
            type="search"
            placeholder = {placeholder}
            onChange = {handlechange}
        />
    )
}
