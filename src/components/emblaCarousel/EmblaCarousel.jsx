import React, { useState, useEffect, useCallback, useRef } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import useInterval from "./useInterval";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons";
import "./emblaCarousel.css";

const EmblaCarouselComponent = ({ autoplay, delayLength, children }) => {
  const [embla, setEmbla] = useState(null);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [delay, setDelay] = useState(delayLength);
  const [isRunning, setIsRunning] = useState(autoplay);

  const scrollTo = useCallback((index) => embla.scrollTo(index), [embla]);
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla.scrollNext(), [embla]);

  useInterval(
    () => {
      if (selectedIndex === scrollSnaps.length - 1) {
        scrollTo(0);
      } else {
        scrollNext();
      }
    },
    isRunning ? delay : null
  );

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
      setPrevBtnEnabled(embla.canScrollPrev());
      setNextBtnEnabled(embla.canScrollNext());
    };
    if (embla) {
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla]);

  function handleIsRunningChange(e) {
    setIsRunning(e.target.checked);
  }

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  return (
    <div>
      <div className="embla">
        <EmblaCarouselReact
          className="embla__viewport"
          emblaRef={setEmbla}
          options={{ loop: false }}
          htmlTagName="div"
        >
          <div className="embla__container">
            {children.map((Child, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">{Child}</div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        <div className="embla__dots">
          {scrollSnaps.map((snap, index) => (
            <DotButton
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
              key={index}
            />
          ))}
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="autoplay">
        <input
          type="checkbox"
          checked={isRunning}
          onChange={handleIsRunningChange}
        />{" "}
        autoplay
        <br />
        delay: <input value={delay} onChange={handleDelayChange} />
      </div>
    </div>
  );
};

export default EmblaCarouselComponent;
