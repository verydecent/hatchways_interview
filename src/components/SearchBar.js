import React from "react";

const SearchBar = ({ placeholder, name, value, onChange }) => {
  return (
    <div className="searchbar">
      <input
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className="searchbar-input"
      />
    </div>
  );
};

export default SearchBar;
