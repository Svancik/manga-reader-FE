import React from "react";
import "./searchBar.css";

export default function SearchBar() {
  return (
    <div class="searchBarWrapper">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Enter name of a Manga here..."
      />
      <button class="searchBar__button button--accent">Search</button>
    </div>
  );
}
