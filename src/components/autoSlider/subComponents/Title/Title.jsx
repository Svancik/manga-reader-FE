import classes from "./index.module.css";
import React from "react";

export default function Title(props) {
  return <h1 className={classes.Container}>{props.children}</h1>;
}
