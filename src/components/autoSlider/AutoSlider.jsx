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

export default function AutoSlider() {
  return (
    <HeroSlider
      className="heroSlider"
      height={"40vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
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
      {/* <Overlay>
        <Wrapper>
          <Title>Berserk</Title>
          <Subtitle>
            Check out the documentation for more advanced examples.
          </Subtitle>
        </Wrapper>
      </Overlay> */}
      <Slide
        shouldRenderMask
        label="Berserk"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/berserk-overlay.png?alt=media&token=7052d354-7193-42a1-8e2a-576e47504005",
        }}
      />
      <Slide
        shouldRenderMask
        label="Vagabond"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/vagabond.png?alt=media&token=37d2104b-077f-46cd-8a39-7b164a3208bf",
        }}
      />

      <Slide
        shouldRenderMask
        label="Oyasumi PunPun"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/punpun.png?alt=media&token=5e4d4c7f-13d7-4eb9-8622-890ee03e1e16",
        }}
      />

      <Slide
        shouldRenderMask
        label="Chainsaw Man"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/chainsawman.png?alt=media&token=7255d57d-0f51-4df6-af78-26212b7072a5",
        }}
      />
      <Slide
        shouldRenderMask
        label="Berserk"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/berserk.png?alt=media&token=446e8cd3-4be8-4a8a-b5f3-137f330a33c6",
        }}
      />
      <Slide
        shouldRenderMask
        label="Vagabond"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/vagabond.png?alt=media&token=37d2104b-077f-46cd-8a39-7b164a3208bf",
        }}
      />

      <Slide
        shouldRenderMask
        label="Oyasumi PunPun"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/punpun.png?alt=media&token=5e4d4c7f-13d7-4eb9-8622-890ee03e1e16",
        }}
      />

      <Slide
        shouldRenderMask
        label="Chainsaw Man"
        background={{
          backgroundImageSrc:
            "https://firebasestorage.googleapis.com/v0/b/manga-reader-36f38.appspot.com/o/chainsawman.png?alt=media&token=7255d57d-0f51-4df6-af78-26212b7072a5",
        }}
      />

      <Nav className="heroSlider__menu" />
    </HeroSlider>
  );
}
