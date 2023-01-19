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
import { useDispatch } from "react-redux";
import { Footer } from "../../components/footer/Footer";
import { Pagination } from "../../components/pagination/Pagination";

export default function Home() {
  const [mangaLibrary, setMangaLibrary] = useState(MangaProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(24);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [priceRange, setPriceRange] = useState(750);
  const [isTextfieldFull, setIsTextFieldFull] = useState(false);

  // Získat nejnovější
  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = mangaLibrary.slice(indexOfFirstBook, indexOfLastBook);

  const orderIsFinised = "?orderFinished" === useLocation().search;
  const dispatch = useDispatch();
  useLocation().search === "?orderFinished"
    ? dispatch(resetCart())
    : console.log("swag");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleMangaLibraryGenre = (e) => {
    console.log("priceRange: ", priceRange);
    isTextfieldFull
      ? setMangaLibrary(mangaLibrary)
      : setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.categories.some((m) => m === e.target.value) &&
              manga.price <= priceRange
          )
        );
    setSelectedCategory(e.target.value);
  };

  const handleFilterReset = () => {
    setMangaLibrary(MangaProducts);
    setPriceRange(getMostExpensivePrice(MangaProducts));
    setSelectedCategory("");
    setSelectedSort("");
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

  const handleSort = (e) => {
    setSelectedSort(e.target.value);

    switch (e.target.value) {
      case "asc":
        setMangaLibrary(
          [].concat(mangaLibrary.sort((a, b) => a.price - b.price))
        );
        break;
      case "desc":
        setMangaLibrary(
          [].concat(mangaLibrary.sort((a, b) => b.price - a.price))
        );
        break;
      case "new":
        setMangaLibrary(
          [].concat(
            mangaLibrary.sort((a, b) => new Date(b.date) - new Date(a.date))
          )
        );
        break;
      case "sale":
        setMangaLibrary(
          [].concat(mangaLibrary.sort((a, b) => b.discount - a.discount))
        );
        break;
      case "rating":
        setMangaLibrary(
          [].concat(mangaLibrary.sort((a, b) => b.rating - a.rating))
        );
        break;

      default:
        break;
    }
  };

  const getMostExpensivePrice = (array) => {
    let mostExpensive = 0;
    for (let index = 0; index < array.length; index++) {
      array[index].price > mostExpensive
        ? (mostExpensive = array[index].price)
        : (mostExpensive = mostExpensive);
    }
    return mostExpensive;
  };

  useEffect(() => {
    selectedCategory
      ? setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.price < priceRange &&
              manga.categories.some((m) => m === selectedCategory)
          )
        )
      : setMangaLibrary(
          MangaProducts.filter((manga) => manga.price <= priceRange)
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
              handleSort={handleSort}
              selectedSort={selectedSort}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
              setPriceRange={setPriceRange}
              priceRange={priceRange}
              isTextfieldFull={isTextfieldFull}
              mostExpensiveBook={getMostExpensivePrice(MangaProducts)}
            />
          </div>
          <div className="contentWrapper">
            <div className="slider">
              <AutoSlider />
            </div>
            <div className="library">
              <Library mangaLibrary={currentBooks} />
            </div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={MangaProducts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
