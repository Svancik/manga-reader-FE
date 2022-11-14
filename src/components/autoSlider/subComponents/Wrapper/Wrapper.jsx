import classes from "./index.module.css";
import React from "react";
export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}
