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

export default function SideMenu({
  handleMangaLibraryGenre,
  selectedCategory,
  setPriceRange,
  handleFilterReset,
  priceRange,
  isTextfieldFull,
}) {
  const [cleanedGenreFilters, setCleanGenreFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(750);

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
      <div className="filterItem">
        <h2>Filtrovat dle ceny</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={750}
            onChange={(e) => setMaxPrice(e.target.value)}
            disabled={isTextfieldFull}
          />
          <span>{priceRange}</span>
        </div>
        <br />
        <button
          value=""
          onClick={handleFilterReset}
          className={isTextfieldFull && "blocked-btn"}
        >
          Zrušit filtry
        </button>
        <hr />
      </div>

      <div className="filterItem">
        <h2>Seřadit dle</h2>
        <div className="sortFilter">
          <span>
            <PaidIcon sx={{ width: "32px", height: "32px", color: "green" }} />
          </span>

          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="filter" />
            <label htmlFor="asc">
              Nejlevnější{" "}
              <TrendingUpIcon sx={{ width: "22px", height: "22px" }} />
            </label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="filter" />
            <label htmlFor="desc">
              Nejdražší{" "}
              <TrendingDownIcon sx={{ width: "22px", height: "22px" }} />
            </label>
          </div>
          <hr />
          <span>
            <FiberNewIcon
              sx={{ width: "32px", height: "32px", color: "green" }}
            />
          </span>
          <div className="inputItem">
            <input type="radio" id="date" value="desc" name="filter" />
            <label htmlFor="date">Nejnovějsí</label>
          </div>
          <hr />

          <span>
            <LocalOfferIcon
              sx={{ width: "32px", height: "32px", color: "green" }}
            />
          </span>

          <div className="inputItem">
            <input type="radio" id="discount" value="desc" name="filter" />
            <label htmlFor="discount">Nejvyšší sleva</label>
          </div>
        </div>
      </div>
    </div>
  );
}
