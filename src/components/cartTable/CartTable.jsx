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
    <div className="cartTable">
      <h3> 1) Check products in your cart</h3>
      <Link to="/" className="linkBack">
        <button className="returnShopping">
          <ArrowBackIcon sx={{ width: "15%", height: "15%", margin: "2px" }} />{" "}
          RETURN SHOPPING
        </button>
      </Link>{" "}
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col" className="col-md-2">
              Quantity
            </th>
            <th scope="col">Total</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>
                <img src={item.img} alt="" />
              </td>
              <td>{item.title}</td>
              <td className="desc-col">{item.desc.substring(0, 75)}</td>
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
                  sx={{ width: "75%", height: "75%" }}
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
