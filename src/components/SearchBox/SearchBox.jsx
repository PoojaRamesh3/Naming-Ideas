import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChange, searchBoxExpandProp }) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Keywords"
                className={`search-input ${
                    searchBoxExpandProp
                        ? 'search-input-contract'
                        : 'search-input-expand'
                }`}
            />
        </div>
    );
};

export default SearchBox;
