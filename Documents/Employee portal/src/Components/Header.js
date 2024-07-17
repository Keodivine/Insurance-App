import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header className="App-header">
      <h1>Employee Management Portal</h1>
      <input
        type="text"
        placeholder="Search by name, surname, ID, or department"
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
