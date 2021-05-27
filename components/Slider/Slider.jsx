// App.js
import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
// import "./App.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(props) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    // centerPadding: "10px",
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {props.slidesData &&
            props.slidesData.map((slide) => (
              <div
                className={styles.slickSlide}
                key={slide.src + Math.random()}
              >
                <img className={styles.slickSlideImage} src={slide.src} />
              </div>
            ))}
        </Slider>
        <div className={styles.thumbnailSliderWrap}>
          <Slider
            {...settingsThumbs}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {props.slidesData &&
              props.slidesData.map((slide) => (
                <div
                  className={styles.slickSlide}
                  key={slide.src + Math.random()}
                >
                  <img className={styles.slickSlideImage} src={slide.src} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
