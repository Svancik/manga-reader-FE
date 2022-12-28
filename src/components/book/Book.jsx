import React from "react";
import { Link } from "react-router-dom";
import "./book.css";
import ReactStars from "react-rating-stars-component";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";


export const Book = ({ manga, fromSeries }) => {


  return (
    <div className="bookWrapper">
      <div className="coverImg">
        <Link to={`/product/${manga.id}`}>
          <img src={manga.imgCover} className="mangaCover" alt="" />
        </Link>
        {manga.discount && (
          <div className="discountBadge">
            <LocalOfferIcon sx={{ width: "100%", height: "100%" }} />
            <span className="discountValue">{manga.discount}</span>
            <span className="oldPriceValue">{manga.price}</span>
          </div>
        )}
        {manga.isNew && (
          <div
            className={manga.isBestseller ? "newBadge badge-up" : "newBadge"}
          >
            <div className="pointer">
              <span>new</span>
            </div>
          </div>
        )}
        {manga.isBestseller && (
          <div className="bestsellerBadge">
            <div className="pointer">
              <span>bestseller</span>
            </div>
          </div>
        )}
        <div className="priceBadge">
          <span>
            <MenuBookTwoToneIcon
              sx={{ width: "25%", height: "100%", margin: "-5px 0px 0px 0px" }}
            />
          </span>
          <span className="price">
            {manga.discount
              ? Math.round(manga.price - (manga.discount / 100) * manga.price)
              : manga.price}
          </span>
        </div>
      </div>
      <div className="bookInfo">
        <Link to={`/product/${manga.id}`}>
          <span className="title">{manga.title}</span>
        </Link>
        <div className="authors">
          {manga.authors.map((author) => (
            <span className="author">{author}</span>
          ))}
        </div>
        <div className="categories">
          {manga.categories.map((category) => (
            <Link>
              <span className="category">{category}</span>
            </Link>
          ))}
        </div>
        <div className="rating">
          <ReactStars
            count={5}
            isHalf={true}
            value={manga.rating}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
        </div>
        {!fromSeries && <button className="buyManga">BUY MANGA</button>}
      </div>
    </div>
  );
};
