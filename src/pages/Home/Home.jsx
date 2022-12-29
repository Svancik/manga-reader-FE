import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import AutoSlider from "../../components/autoSlider/AutoSlider";
import Topbar from "./../../components/topbar/Topbar";
import "./home.css";
import Library from "../../components/library/Library";
import { MangaProducts } from "../../dummyData";
import { useState, useEffect } from "react";
//TODO: Buttony se chovají zvláštně po kliknutí (i ve slideru)

export default function Home() {
  const [mangaLibrary, setMangaLibrary] = useState(MangaProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(750);

  const handleMangaLibraryGenre = (e) => {
    e.target.value === ""
      ? setMangaLibrary(MangaProducts)
      : setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.categories.some((m) => m === e.target.value) &&
              manga.price < priceRange
          )
        );
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    // console.log("price: ", priceRange);
    // console.log(mangaLibrary.filter((manga) => manga.price < priceRange));
    console.log(selectedCategory);
    selectedCategory
      ? setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.price < priceRange &&
              manga.categories.some((m) => m === selectedCategory)
          )
        )
      : setMangaLibrary(
          MangaProducts.filter((manga) => manga.price < priceRange)
        );
  }, [priceRange]);

  return (
    <div className="body">
      <div className="homeWrapper">
        <Topbar />
        <div className="hero">
          <div className="sideMenu">
            <SideMenu
              handleMangaLibraryGenre={handleMangaLibraryGenre}
              setSelectedCategory={setSelectedCategory}
              setPriceRange={setPriceRange}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="contentWrapper">
            <div className="slider">
              <AutoSlider />
            </div>
            <div className="library">
              <Library mangaLibrary={mangaLibrary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
