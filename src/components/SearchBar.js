import React from "react";

const SearchBar = ({ searchText, onChange }) => {
  return (
    <div className="searchbar">
      <input
        onChange={onChange}
        value={searchText}
        name="searchText"
        placeholder="Search by name"
        className="searchbar-input"
      />
    </div>
  );
};

export default SearchBar;
