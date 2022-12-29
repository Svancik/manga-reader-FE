import React from "react";
import { useState, useEffect } from "react";
import "./sideMenu.css";
import { Genres } from "../../dummyData";

export default function SideMenu({
  handleMangaLibraryGenre,
  selectedCategory,
  setPriceRange,
}) {
  const [cleanedGenreFilters, setCleanGenreFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(750);

  useEffect(() => {
    setPriceRange(maxPrice);
  }, [maxPrice]);

  return (
    <div className="skewed-left">
      <div className="sideMenuWrapper">
        <div className="genresFilter">
          <div className="filterItem">
            <h2>Genres</h2>
            {Genres.map((genre) => (
              <div className="inputItem" key={genre.id}>
                <input
                  type="radio"
                  name="genre"
                  id={genre.id}
                  value={genre.name}
                  onClick={handleMangaLibraryGenre}
                  checked={selectedCategory === genre.name}
                />
                <label htmlFor={genre.id}>{genre.name}</label>
              </div>
            ))}
            <button value="" onClick={handleMangaLibraryGenre}>
              ALL GENRES
            </button>
            <hr />
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={750}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
          <hr />
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="sortFilter">
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="desc" value="desc" name="price" />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
