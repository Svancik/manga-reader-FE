import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import SideMenu from "../../components/sideMenu/SideMenu";
import AutoSlider from "../../components/autoSlider/AutoSlider";
import Topbar from "./../../components/topbar/Topbar";
import Library from "../../components/library/Library";
import { OrderFinishedPopUp } from "../../components/orderFinishedPopUp/OrderFinishedPopUp";
import { Footer } from "../../components/footer/Footer";
import { Pagination } from "../../components/pagination/Pagination";
import { MangaProducts } from "../../dummyData";
import "./home.css";

/*

Toto je hlavní stránka v které můžeme procházet knihy na prodej, filtrovat je dle kategorií, řadit dle ceny, či hledat textem. Stránka obsahuje pagination a můžeme přepnout ja jinou stránku.
Navigování přes další stránky zajištuje komponenta <Topbar/>.
Selekci knížek zajištuje komponenta <Sidebar/> která přes props přebírá různé metody a konstanty z této komponenty <Home/>. 
Můžeme již odtud předávat položky do košíku, toto přidávání je zajištěno pomocí REDUX.

*/

export default function Home() {
  //Načtení databáze knih z lokálního souboru (lze upravit a dodělat napojení na API)
  const [mangaLibrary, setMangaLibrary] = useState(MangaProducts);

  //konstanty slouží pro pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 24;
  const indexOfLastBook = currentPage * postsPerPage;
  const indexOfFirstBook = indexOfLastBook - postsPerPage;
  const currentBooks = mangaLibrary.slice(indexOfFirstBook, indexOfLastBook);

  //konstanty slouží pro selekci knížek jež se zobrazí v komponentě <Library/>
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [priceRange, setPriceRange] = useState(750);
  const [isTextfieldFull, setIsTextFieldFull] = useState(false);

  //Pomocí URL zjistíme zda již uživatel provedl objednávku. Pokud ji provedl tak mu bude zobrazeno vyskakovací okno v komponentě <Home/> které ho bude informovat o úspěšné objednávce.
  const orderIsFinised = "?orderFinished" === useLocation().search;
  const dispatch = useDispatch();
  useLocation().search === "?orderFinished"
    ? dispatch(resetCart())
    : console.log();
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  //Funkce zajištující změnu knížek které se zobrazí v <Library/> po selekci inputu v komponentě <Sidebar/>
  const handleMangaLibraryGenre = (e) => {
    isTextfieldFull
      ? setMangaLibrary(mangaLibrary)
      : setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.categories.some((m) => m === e.target.value) &&
              manga.price <= priceRange
          )
        );
    setCurrentPage(1);
    setSelectedGenre(e.target.value);
  };

  //Funkce zajištující vyhledávání knížek dle jejich názvu který je zadán v komponentě <Topbar/>, upravený seznam knížek je následně předáván komponetně <Library/>
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

  //Funkce zajištující reset všech filtrů zobrazní všech knížek v <Library/> po selekci restartu filtrů v komponentě <Sidebar/>
    const handleFilterReset = () => {
      setMangaLibrary(MangaProducts);
      setPriceRange(getMostExpensivePrice(MangaProducts));
      setSelectedGenre("");
      setSelectedSort("");
    };

  //Funkce zajištující seřazení knížek v komponentě <Library/> dle výběru sežazení v komponentě <Sidebar/>
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

  //Získání nejdražší knížky z pole
  const getMostExpensivePrice = (array) => {
    let mostExpensive = 0;
    for (let index = 0; index < array.length; index++) {
      if (array[index].price > mostExpensive) {
        mostExpensive = array[index].price;
      }
    }
    return mostExpensive;
  };

  //Re-renderování knížek při změně filtru na cenu
  useEffect(() => {
    selectedGenre
      ? setMangaLibrary(
          MangaProducts.filter(
            (manga) =>
              manga.price < priceRange &&
              manga.categories.some((m) => m === selectedGenre)
          )
        )
      : setMangaLibrary(
          MangaProducts.filter((manga) => manga.price <= priceRange)
        );
  }, [priceRange]);

  return (
    //Níže je kondičně nastavená stylizace a funkce pokud dojde k tomu že se uživatel dostal na stránku <Home/> po té co dokončil objednávku.
    <div className={orderIsFinised ? "no-scroll" : "scroll"}>
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
              selectedGenre={selectedGenre}
              selectedSort={selectedSort}
              setPriceRange={setPriceRange}
              setCurrentPage={setCurrentPage}
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
            <div className="pagination">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={
                  mangaLibrary.length !== 0
                    ? mangaLibrary.length
                    : MangaProducts.length
                }
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
