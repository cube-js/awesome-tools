// App.js
import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
// import "./App.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function getSettingsThumbs(slidesToShow) {
  return {
    slidesToShow: Math.min(4, slidesToShow),
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
  };
}

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

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {props.slidesData &&
            props.slidesData.map((slide, i) => (
              <div className={styles.slickSlide} key={slide}>
                <img
                  className={styles.slickSlideImage}
                  src={slide}
                  alt={`Preview ${i}`}
                />
              </div>
            ))}
        </Slider>
        <div className={styles.thumbnailSliderWrap}>
          <Slider
            {...getSettingsThumbs(props.slidesData.length)}
            asNavFor={nav1}
            ref={(slider) => setSlider2(slider)}
          >
            {props.slidesData &&
              props.slidesData.map((slide, i) => (
                <div className={styles.slickSlide} key={slide}>
                  <img
                    className={styles.slickSlideImage}
                    src={slide}
                    alt={`Thumbnail ${i}`}
                  />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
