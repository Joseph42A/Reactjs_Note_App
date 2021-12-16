import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.2rem" />
      <input
        type="text"
        onChange={(e) => handleSearchText(e.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
