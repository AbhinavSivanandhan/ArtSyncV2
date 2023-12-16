// Header.js
import React, { useState } from 'react';
import './Header.css';

function Header({ logoSrc }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };

  return (
    <div className="header">
      <img src={logoSrc} alt="Logo" className="logo" />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-icon" onClick={handleSearch}>
          &#128269;
        </button>
      </div>
      <div className="profile-icon">&#128100;</div>
    </div>
  );
}

export default Header;
