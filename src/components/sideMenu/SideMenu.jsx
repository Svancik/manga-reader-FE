import React from "react";
import "./sideMenu.css";

import { Genres } from "../../dummyData";
import SideMenuItem from "../sideMenuItem/SideMenuItem";

export default function SideMenu() {
  return (
    <div className="sideMenu__wrapper">
      <div className="sideMenu__list">
        {Genres.map((genre) => (
          <SideMenuItem key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
}
