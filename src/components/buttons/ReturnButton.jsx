import React from "react";
import "./buttons.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
export const ReturnButton = () => {
  return (
    <button className="returnShopping">
      <Link className="link" to="/">
        <ArrowBackIcon sx={{ width: "15%", height: "90%", margin: "5px" }} />{" "}
        ZPĚT DO OBCHODU
      </Link>
    </button>
  );
};
