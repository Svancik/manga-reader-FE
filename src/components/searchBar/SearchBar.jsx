import React from "react";
import "./searchBar.css";

export default function SearchBar({ handleTextSearch }) {
  return (
    <div className="searchBarWrapper">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Enter name of a Manga here..."
        onChange={handleTextSearch}
      />
      <button className="searchBar__button button--accent">Search</button>
    </div>
  );
}
