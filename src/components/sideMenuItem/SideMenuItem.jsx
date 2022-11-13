import React from "react";
import "./sideMenuItem.css";

export default function SideMenuItem({ genre }) {
  return (
    <div className="sideMenu__item">
      <li>{genre.name}</li>
    </div>
  );
}
