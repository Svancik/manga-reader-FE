import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import Topbar from "./../../components/topbar/Topbar";
import "./home.css";
export default function Home() {
  return (
    <div className="body">
      <div className="homeWrapper">
        <Topbar />
        <div className="hero">
          <div className="sideMenu">
            <SideMenu />
          </div>
          <div className="horizontalCarousel"></div>
          <div className="library"></div>
        </div>
      </div>
    </div>
  );
}
