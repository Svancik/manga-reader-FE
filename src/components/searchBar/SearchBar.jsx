import React from "react";
import "./searchBar.css";

export default function SearchBar({ handleTextSearch }) {
  return (
    <div className="searchBarWrapper">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Vyhledávejte podle názvu mangy..."
        onChange={handleTextSearch}
      />
      {/* <button className="searchBar__button button--accent">Search</button> */}
    </div>
  );
}
