import React from "react";
import { Link } from "react-router-dom";
import "./book.css";
import ReactStars from "react-rating-stars-component";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

export const Book = ({ manga }) => {
  return (
    <div className="bookWrapper">
      <div className="coverImg">
        <img src={manga.imgCover} alt="" />
        <div className="paperBackPriceBadge">
          <span>
            <MenuBookTwoToneIcon
              sx={{ width: "25%", height: "25%", margin: "-5px 0px 0px 0px" }}
            />
          </span>
          <span>{manga.price} Kč</span>
        </div>
      </div>
      <div className="bookInfo">
        <Link>
          <span className="title">{manga.title}</span>
        </Link>
        <div className="authors">
          {manga.authors.map((author) => (
            <span className="author">{author}</span>
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
        <button className="readOnline">VIEW MANGA</button>
      </div>
    </div>
  );
};
