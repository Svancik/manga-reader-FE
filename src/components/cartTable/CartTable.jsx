import React from "react";
import "./cartTable.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { useState } from "react";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//TODO: Vyřešit přidávání a odebírání počtu kusů uvnitř REDUX

export const CartTable = () => {
  const [quantity, setQuantity] = useState(0);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="cartTable">
      <h1>Products in your cart</h1>
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
              <td>{item.desc.substring(0, 75)}</td>
              <td>{item.price}</td>
              <td>
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
                  {item.quantity}
                  <button onClick={() => setQuantity((prev) => prev + 1)}>
                    +
                  </button>
                </div>
              </td>
              <td>{item.quantity * item.price}</td>
              <td>
                <DeleteOutlinedIcon
                  className="delete"
                  onClick={() => dispatch(removeItem(item.id))}
                  sx={{ width: "75%", height: "75%" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
