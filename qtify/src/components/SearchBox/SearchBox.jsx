import React from 'react';
import './Searchbox.css';

function Searchbox() {
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search a album of your choice" />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default Searchbox;