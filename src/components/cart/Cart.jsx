import React from "react";
import "./cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
//TODO: Po refreshi položky z košíku zmizí!

export const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products.map((item) => (
        <>
          <hr />
          <div className="item" key={item.id}>
            {console.log(item)}
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x {item.price} Kč
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        </>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>{totalPrice()} Kč</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;