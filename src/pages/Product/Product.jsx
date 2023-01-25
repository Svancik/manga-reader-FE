import React, { useEffect } from "react";
import "./product.css";
import Topbar from "./../../components/topbar/Topbar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MangaProducts } from "../../dummyData";
import ReactStars from "react-rating-stars-component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Book } from "./../../components/book/Book";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ReturnButton } from "../../components/buttons/ReturnButton";
import { LoginButton } from "../../components/buttons/LoginButton";
import { RegisterButton } from "../../components/buttons/RegisterButton";
import { CartButton } from "../../components/buttons/CartButton";
import { ProductTopbar } from "../../components/productTopbar/ProductTopbar";

export default function Product() {
  const productId = useLocation().pathname.split("/")[2];
  const product = MangaProducts.filter((manga) => manga.id == productId)[0];
  const series = MangaProducts.filter(
    (manga) => manga.series === product.series && manga.id != product.id
  );

  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(product.imgCover);

  const dispatch = useDispatch();

  useEffect(() => {
    setMainImg(product.imgCover);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProductTopbar />
      <div className="product">
        <div className="left">
          <div className="images">
            {product.imgPanels.map((panel) => (
              <img src={panel} onClick={() => setMainImg(panel)} alt="" />
            ))}
            <img
              src={product.imgCover}
              onClick={() => setMainImg(product.imgCover)}
              alt=""
            />
          </div>
          <div className="mainImg">
            <img src={mainImg} alt="" />
          </div>
        </div>
        <div className="right">
          <h1 className="title">{product.title}</h1>
          <h4 className="author">{product.authors.map((author) => author)}</h4>
          <span className="desc">{product.desc}</span>
          <span className="priceValue">{product.price}</span>
          {product.discount && (
            <span className="oldPrice">
              {Math.round(
                product.price + (product.discount / 100) * product.price
              )}
            </span>
          )}
          <div className="quantity">
            <button
              onClick={
                quantity === 0
                  ? () => setQuantity(0)
                  : () => setQuantity((prev) => prev - 1)
              }
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  desc: product.desc,
                  price: product.price,
                  img: product.imgCover,
                  language: product.language,
                  quantity,
                })
              )
            }
          >
            <ShoppingCartOutlinedIcon sx={{ height: "24px", width: "24px" }} />
            Přidat do košíku
          </button>
          <div className="info">
            {product.isNew && (
              <div
                className={
                  product.isBestseller ? "newBadge badge-up" : "newBadge"
                }
              >
                <div className="pointer">
                  <span>nové</span>
                </div>
              </div>
            )}
            {product.isBestseller && (
              <div className="bestsellerBadge">
                <div className="pointer">
                  <span>bestseller</span>
                </div>
              </div>
            )}
            <div className="ratingDiv">
              <span className="rating">
                Hodnocení: {"  "}
                <div className="ratingStars">
                  <ReactStars
                    count={5}
                    isHalf={true}
                    value={product.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p>{product.numberOfRatings}x</p>
              </span>
            </div>
            <span>
              Jazyk:{" "}
              {product.language === "EN" && (
                <img className="flag" src="/img/en.png" alt="" />
              )}
              {product.language === "CZ" && (
                <img className="flag" src="/img/cz.png" alt="" />
              )}
            </span>

            <span>
              Žánry:
              {product.categories.map((genre) => (
                <span className="genre"> {genre}</span>
              ))}
            </span>
            <span>Počet stránek: {product.pages}</span>
            <span>Datum vydání: {product.date}</span>

            <h3>
              VÍCE ZE SÉRIE <b>{product.series}</b>:
            </h3>
            <div className="showSeries">
              {series.map((manga) => (
                <Book
                  manga={manga}
                  fromSeries={true}
                  onClick={() => setMainImg(manga.imgCover)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
