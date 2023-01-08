import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import AutoSlider from "../../components/autoSlider/AutoSlider";
import Topbar from "./../../components/topbar/Topbar";
import "./home.css";
import Library from "../../components/library/Library";
import { MangaProducts } from "../../dummyData";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OrderFinishedPopUp } from "../../components/orderFinishedPopUp/OrderFinishedPopUp";
import { resetCart } from "../../redux/cartReducer";
//TODO: Buttony se chovají zvláštně po kliknutí (i ve slideru)

export default function Home() {
  const [mangaLibrary, setMangaLibrary] = useState(MangaProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(750);
  const [isTextfieldFull, setIsTextFieldFull] = useState(false);

  const orderIsFinised = "?orderFinished" === useLocation().search;

  console.log(orderIsFinised);

  const handleMangaLibraryGenre = (e) => {
    isTextfieldFull
      ? setMangaLibrary(mangaLibrary)
      : setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.categories.some((m) => m === e.target.value) &&
              manga.price < priceRange
          )
        );

    setSelectedCategory(e.target.value);
  };

  const handleFilterReset = () => {
    setMangaLibrary(MangaProducts);
    setPriceRange(750);
    setSelectedCategory("");
  };

  const handleTextSearch = (e) => {
    handleFilterReset();
    e.target.value === ""
      ? setIsTextFieldFull(false)
      : setIsTextFieldFull(true);
    setMangaLibrary(
      MangaProducts.filter((manga) =>
        manga.title
          .toString()
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  useEffect(() => {
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
    <div className={orderIsFinised ? "body no-scroll" : "body"}>
      {orderIsFinised && resetCart}
      {orderIsFinised && <OrderFinishedPopUp />}

      <div className="homeWrapper">
        <Topbar handleTextSearch={handleTextSearch} />
        <div className="hero">
          <div className="sideMenu">
            <SideMenu
              handleMangaLibraryGenre={handleMangaLibraryGenre}
              handleFilterReset={handleFilterReset}
              setSelectedCategory={setSelectedCategory}
              setPriceRange={setPriceRange}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              isTextfieldFull={isTextfieldFull}
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
