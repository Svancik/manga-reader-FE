import React from "react";
import "./buttons.css";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

export const FinishOrder = () => {
  return (
    <button className="finishOrder" type="submit" form="myform">
      <CheckIcon sx={{ width: "17%", height: "90%", margin: "0px" }} /> OBJEDNAT{" "}
    </button>
  );
};
