import React from 'react';
import './SearchBox.css';

function SearchBox() {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search a album of your choice" />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBox;