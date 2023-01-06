import React from "react";
import "./buttons.css";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

export const FinishOrder = () => {
  return (
    <button className="finishOrder">
      <Link className="link" to="/">
        <CheckIcon sx={{ width: "17%", height: "90%", margin: "0px" }} />{" "}
        OBJEDNAT{" "}
      </Link>
    </button>
  );
};
