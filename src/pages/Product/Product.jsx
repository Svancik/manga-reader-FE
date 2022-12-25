import React from "react";
import "./product.css";

export default function Product() {
  return (
    <div className="product">
      <>
        <div className="left">
          <div className="images"></div>
          <div className="mainImg"></div>
        </div>
        <div className="right">
          <h1></h1>
          <span className="price"></span>
          <p></p>
          <div className="quantity">
            <button>-</button>

            <button>+</button>
          </div>
          <button className="add">ADD TO CARD</button>
          <div className="links">
            <div className="item">ADD TO WISH LIST</div>
            <div className="item">ADD TO COMPARE</div>
          </div>
          <div className="info">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </>
    </div>
  );
}
