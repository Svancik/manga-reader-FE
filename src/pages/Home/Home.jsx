import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import AutoSlider from "../../components/autoSlider/AutoSlider";
import Topbar from "./../../components/topbar/Topbar";
import "./home.css";
import Library from "../../components/library/Library";
import { MangaProducts } from "../../dummyData";
import { useState } from "react";
//TODO: Buttony se chovají zvláštně po kliknutí (i ve slideru)

export default function Home() {
  const [mangaLibrary, setMangaLibrary] = useState(MangaProducts);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleMangaLibraryGenre = (e) => {
    e.target.value === "all"
      ? setMangaLibrary(MangaProducts)
      : setMangaLibrary(
          MangaProducts.filter((manga) =>
            manga.categories.some((m) => m === e.target.value)
          )
        );
    console.log(mangaLibrary);
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="body">
      <div className="homeWrapper">
        <Topbar />
        <div className="hero">
          <div className="sideMenu">
            <SideMenu
              handleMangaLibraryGenre={handleMangaLibraryGenre}
              setSelectedCategory={setSelectedCategory}
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
