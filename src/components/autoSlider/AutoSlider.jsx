import React from "react";
import HeroSlider, { Slide, Nav } from "hero-slider";
import "./autoSlider.css";

const slides = [
  {
    label: "Berserk",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/berserk-overlay.webp?alt=media&token=924179a4-6b53-44bc-8fc1-51d113cf3dc1",
  },
  {
    label: "Goodnight Punpun",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/punpun.png?alt=media&token=8be1bd37-45c7-452b-b1ac-14e74fee5767",
  },
  {
    label: "Akira",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/akira-overlay.png?alt=media&token=db08ad89-6a94-4b57-af43-ebc8b3d5c57e",
  },
  {
    label: "One Punch Man",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/onepunch-overlay.png?alt=media&token=dc36e98b-643a-48c4-8443-ef453bf9a6e3",
  },
  {
    label: "Attack on Titan",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/aot-overlay.webp?alt=media&token=4e62891a-400d-432e-9124-d3bc92b0676a",
  },
  {
    label: "Neon Genesis Evangelion",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/neongenesis-overlay.webp?alt=media&token=5d7e4001-1894-4431-9b19-9fb499ef9ee2",
  },
  {
    label: "Vagabond",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/vagabond-overlay.webp?alt=media&token=3408e6a2-d668-4183-b8e4-1503cd390626",
  },
  {
    label: "Chainsaw Man",
    url: "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/chainsawmanpng-overlay.webp?alt=media&token=49f5c123-5c08-469e-be18-fafeb91a416e",
  },
];

export default function AutoSlider() {
  return (
    <HeroSlider
      className="heroSlider"
      height={"42.5vh"}
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
        <div className="heroSlider__slide" key={slide.label}>
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
