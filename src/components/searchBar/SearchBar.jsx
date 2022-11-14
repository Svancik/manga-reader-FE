import React from "react";
import "./searchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBarWrapper">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Enter name of a Manga here..."
      />
      <button className="searchBar__button button--accent">Search</button>
    </div>
  );
}
