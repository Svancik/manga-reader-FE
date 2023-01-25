import React from "react";
import { useState, useEffect } from "react";
import "./sideMenu.css";
import { Genres } from "../../dummyData";
import MoneyIcon from "@mui/icons-material/Money";
import PaidIcon from "@mui/icons-material/Paid";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StarBorderIcon from "@mui/icons-material/StarBorder";
export default function SideMenu({
  handleMangaLibraryGenre,
  selectedCategory,
  selectedSort,
  setPriceRange,
  handleFilterReset,
  priceRange,
  isTextfieldFull,
  handleSort,
  mostExpensiveBook,
}) {
  const [cleanedGenreFilters, setCleanGenreFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(mostExpensiveBook);

  useEffect(() => {
    setPriceRange(maxPrice);
  }, [maxPrice]);

  return (
    <div className="sideMenuWrapper">
      <div className="genresFilter">
        <div className="filterItem">
          <h2>Filtrovat dle žánru</h2>
          {Genres.map((genre) => (
            <div className="inputItem" key={genre.id}>
              <input
                type="radio"
                name="genre"
                id={genre.id}
                value={genre.name}
                onClick={handleMangaLibraryGenre}
                checked={selectedCategory === genre.name}
                disabled={isTextfieldFull}
              />
              <label htmlFor={genre.id}>{genre.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="priceFilter">
      <div className="filterItem">
        <hr />
        <h2>Filtrovat dle ceny</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={mostExpensiveBook}
            onChange={(e) => setMaxPrice(e.target.value)}
            disabled={isTextfieldFull}
          />
          <span>{priceRange}</span>
        </div>

        <hr />
      </div>
      </div>

      <div className="filterItem">
        <h2>Seřadit dle</h2>
        <div className="sortFilter">
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="filter"
              onClick={handleSort}
              checked={selectedSort === "asc"}
            />
            <label htmlFor="asc">
              <TrendingUpIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "green",
                  margin: "0 10px 0 0",
                }}
              />
              Ceny vzestupně
            </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="filter"
              onClick={handleSort}
              checked={selectedSort === "desc"}
            />
            <label htmlFor="desc">
              <TrendingDownIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "green",
                  margin: "0 10px 0 0",
                }}
              />
              Ceny sestupně
            </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="date"
              value="new"
              name="filter"
              onClick={handleSort}
              checked={selectedSort === "new"}
            />
            <label htmlFor="date">
              <FiberNewIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "green",
                  margin: "0 10px 0 0",
                }}
              />
              Datum vydání
            </label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="discount"
              value="sale"
              name="filter"
              onClick={handleSort}
              checked={selectedSort === "sale"}
            />
            <label htmlFor="discount">
              {" "}
              <LocalOfferIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "green",
                  margin: "0 10px 0 0",
                }}
              />
              Zlevnění
            </label>
          </div>

          <div className="inputItem">
            <input
              type="radio"
              id="rating"
              value="rating"
              name="filter"
              onClick={handleSort}
              checked={selectedSort === "rating"}
            />
            <label htmlFor="rating">
              {" "}
              <StarBorderIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: "green",
                  margin: "0 10px 0 0",
                }}
              />
              Nejoblíbenější
            </label>
          </div>
        </div>
        <br />
        <button
          value=""
          onClick={handleFilterReset}
          className={isTextfieldFull && "blocked-btn"}
        >
          Zrušit filtry
        </button>
      </div>
    </div>
  );
}
