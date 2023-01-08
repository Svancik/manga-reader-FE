import React from "react";
import { Link } from "react-router-dom";
export const ContinueShopping = () => {
  return (
    <Link to="/">
      <button className="continueShopping" type="submit" form="myform">
        ZPĚT DO OBCHODU
      </button>
    </Link>
  );
};
