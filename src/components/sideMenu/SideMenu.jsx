import React from "react";
import { useState, useEffect } from "react";
import "./sideMenu.css";
import { Genres } from "../../dummyData";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
export default function SideMenu({
  handleMangaLibraryGenre,
  setPriceRange,
  setCurrentPage,
  handleFilterReset,
  priceRange,
  isTextfieldFull,
  handleSort,
  mostExpensiveBook,
  selectedGenre,
  selectedSort,
}) {
  const [maxPrice, setMaxPrice] = useState(mostExpensiveBook);

  useEffect(() => {
    setPriceRange(maxPrice);
  }, [maxPrice]);

  return (
    <div className="sideMenuWrapper">
      {isTextfieldFull && (
        <div className="blockedFilterMsg">
          <span>
            {" "}
            <WarningAmberIcon
              sx={{
                width: "26px",
                height: "26px",
                color: "yellow",
                margin: "0 10px 0 0",
              }}
            />
            Smažte vyhledávání pro aktivaci filtrů
          </span>
        </div>
      )}
      <div className="genresFilter">
        <div
          className={
            isTextfieldFull ? "filterItem filterBlocked" : "filterItem"
          }
        >
          <h2>Filtrovat dle žánru</h2>
          {Genres.map((genre) => (
            <div className="inputItem" key={genre.id}>
              <input
                type="radio"
                name="genre"
                id={genre.id}
                value={genre.name}
                onChange={handleMangaLibraryGenre}
                disabled={isTextfieldFull}
                checked={selectedGenre === genre.name}
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
              onChange={(e) => {
                setMaxPrice(e.target.value);
                setCurrentPage(1);
              }}
              disabled={isTextfieldFull}
            />
            <span>{priceRange}</span>
          </div>

          <hr />
        </div>
      </div>

      <div className="filterItem">
        <h2>Seřadit dle</h2>
        <div
          className={
            isTextfieldFull ? "sortFilter filterBlocked" : "sortFilter"
          }
        >
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="filter"
              onChange={handleSort}
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
              onChange={handleSort}
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
              onChange={handleSort}
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
              onChange={handleSort}
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
              onChange={handleSort}
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
          className={isTextfieldFull ? "blocked-btn" : "cancelFilter"}
        >
          Zrušit filtry
        </button>
      </div>
    </div>
  );
}
