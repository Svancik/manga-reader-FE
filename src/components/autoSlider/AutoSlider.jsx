import React from "react";
import "./autoSlider.css";

import HeroSlider, { Overlay, Slide, MenuNav, Nav } from "hero-slider";
import Wrapper from "./subComponents/Wrapper/Wrapper";
import Title from "./subComponents/Title/Title";
import Subtitle from "./subComponents/Subtitle/Subtitle";

const PunPun = "https://images.alphacoders.com/923/923115.png";
const bogliasco =
  "https://cdn.readkakegurui.com/file/mangaifenzi22/oyasumi-punpun/vol-12-chapter-131/6.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

const slides = [
  {
    label: "Berserk",
    url:
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/berserk-overlay.webp?alt=media&token=924179a4-6b53-44bc-8fc1-51d113cf3dc1",
  },
  // {
  //   label: "Goodnight Punpun",
  //   url:
  //     "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/goodnight%20punpun.png?alt=media&token=c54b6c8f-d566-499c-b3ed-d4e3b1adb532",
  // },
  {
    label: "Goodnight Punpun",
    url:
      "https://dthezntil550i.cloudfront.net/56/latest/562211210010423950024013769/da98a649-990c-4d65-ac28-7f2a48f9c3be.png",
  },
  // {
  //   label: "Akira",
  //   url:
  //     "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/akira-overlay.png?alt=media&token=3871938b-5010-4363-a760-a34ad2007c91",
  // },
  {
    label: "One Punch Man",
    url:
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/onepunch-overlay.png?alt=media&token=dc36e98b-643a-48c4-8443-ef453bf9a6e3",
  },
  // {
  //   label: "Attack on Titan",
  //   url:
  //     "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/aot-overlay.webp?alt=media&token=36a511fa-9414-49d4-900c-fc8653c02788",
  // },
  {
    label: "Neon Genesis Evangelion",
    url:
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/neongenesis-overlay.webp?alt=media&token=5d7e4001-1894-4431-9b19-9fb499ef9ee2",
  },
  {
    label: "Vagabond",
    url:
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/vagabond-overlay.webp?alt=media&token=3408e6a2-d668-4183-b8e4-1503cd390626",
  },
  {
    label: "Chainsaw Man",
    url:
      "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/chainsawmanpng-overlay.webp?alt=media&token=49f5c123-5c08-469e-be18-fafeb91a416e",
  },
];

export default function AutoSlider() {
  return (
    <HeroSlider
      className="heroSlider"
      height={"33vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 300,
        autoplayDuration: 500,
        slidingDelay: 10,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {slides.map((slide) => (
        <div className="heroSlider__slide">
          <Slide
            shouldRenderMask
            label={slide.label}
            background={{
              backgroundImageSrc: slide.url,
            }}
          />
        </div>
      ))}

      <Nav className="heroSlider__menu" />
    </HeroSlider>
  );
}
