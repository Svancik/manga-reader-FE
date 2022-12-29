import React, { useEffect } from "react";
import "./product.css";
import Topbar from "./../../components/topbar/Topbar";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MangaProducts } from "../../dummyData";
import ReactStars from "react-rating-stars-component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Book } from "./../../components/book/Book";

export default function Product() {
  const productId = useLocation().pathname.split("/")[2];
  const product = MangaProducts.filter((manga) => manga.id == productId)[0];
  const series = MangaProducts.filter(
    (manga) => manga.series === product.series && manga.id != product.id
  );

  const [quantity, setQuantity] = useState(0);
  const [mainImg, setMainImg] = useState(product.imgCover);

  useEffect(() => {
    setMainImg(product.imgCover);
  }, [product]);

  return (
    <>
      <Topbar />
      <div className="product">
        <>
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
            <Link to="/" className="linkBack">
              <ArrowBackIcon
                sx={{ width: "100%", height: "100%", margin: "0" }}
              />{" "}
            </Link>{" "}
            <h1 className="title">{product.title}</h1>
            <h4 className="author">
              {product.authors.map((author) => author)}
            </h4>
            <span className="desc">{product.desc}</span>
            <span className="priceValue">
              {product.discount
                ? Math.round(
                    product.price - (product.discount / 100) * product.price
                  )
                : product.price}
            </span>
            {product.discount && (
              <span className="oldPrice">{product.price}</span>
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
            <button className="add">ADD TO CARD</button>
            <div className="info">
              {product.isNew && (
                <div
                  className={
                    product.isBestseller ? "newBadge badge-up" : "newBadge"
                  }
                >
                  <div className="pointer">
                    <span>new</span>
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
                  Rating: {"  "}
                  <ReactStars
                    count={5}
                    isHalf={true}
                    value={product.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                    classNames="ratingStars"
                  />
                  {product.numberOfRatings}x
                </span>
              </div>
              <span>
                Language:{" "}
                {product.language === "EN" ? (
                  <img className="flag" src="/img/en.png" alt="" />
                ) : (
                  product.language
                )}{" "}
              </span>

              <span>
                Genres:
                {product.categories.map((genre) => (
                  <span className="genre"> {genre}</span>
                ))}
              </span>
              <span>Pages: {product.pages}</span>
              <span>Date of publishment: {product.date}</span>

              <h3>More from the series:</h3>
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
        </>
      </div>
    </>
  );
}