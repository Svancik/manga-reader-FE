import React from "react";
import SideMenu from "../../components/sideMenu/SideMenu";
import AutoSlider from "../../components/autoSlider/AutoSlider";
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
          <div className="contentWrapper">
            <div className="slider">
              <AutoSlider />
            </div>

            <div className="library"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
