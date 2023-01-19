import React from "react";
import "./cartTable.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  resetCart,
} from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ShoppingCartIcon } from "@mui/icons-material/ShoppingCart";

export const CartTable = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const totalQuantity = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="cartTable transparent-box">
      <h3>
        {" "}
        1) Zkontrolujte si obsah svého košíku v hodnotě <b>{totalPrice()} Kč</b>
      </h3>
      <Link to="/" className="linkBack"></Link>{" "}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Obrázek</th>
            <th scope="col">Název</th>
            <th scope="col">Jazyk</th>
            <th scope="col">Popis</th>
            <th scope="col">Cena / ks</th>
            <th scope="col" className="col-md-2">
              Množství
            </th>
            <th scope="col">Celkem</th>
            <th scope="col">Odebrat</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>
                <img src={item.img} alt="" />
              </td>
              <td>{item.title}</td>
              <td>
                {item.language === "EN" && (
                  <img className="flag" src="/img/en.png" alt="" />
                )}
                {item.language === "CZ" && (
                  <img className="flag" src="/img/cz.png" alt="" />
                )}
              </td>
              <td className="desc-col">{item.desc.substring(0, 30)}</td>
              <td className="price-col">{item.price}</td>
              <td>
                <div className="quantity">
                  <button
                    className={item.quantity === 1 ? "quantity-disabled" : ""}
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          id: item.id,
                          title: item.title,
                          desc: item.desc,
                          price: item.price,
                          img: item.imgCover,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          id: item.id,
                          title: item.title,
                          desc: item.desc,
                          price: item.price,
                          img: item.imgCover,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="total-col">{item.quantity * item.price}</td>
              <td>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                  sx={{ width: "9%", height: "9%" }}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="total">{totalQuantity()} ks</td>
            <td className="total">{totalPrice()} Kč</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
