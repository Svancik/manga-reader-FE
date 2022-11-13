import React from "react";
import EmblaCarousel from "../../components/emblaCarousel/EmblaCarousel";
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
          <div className="contentWrapper">
            <div className="horizontalCarousel">
              {/* <EmblaCarousel autoplay delayLength={2000}>
                <div />
                <div />
                <div />
                <div />
                <div />
              </EmblaCarousel> */}
            </div>

            <div className="library"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
