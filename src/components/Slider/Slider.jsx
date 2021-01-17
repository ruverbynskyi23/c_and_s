import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import styles from './slider.module.scss';
import { sliderImgs } from '../../assets/index';

SwiperCore.use([ Navigation ]);

class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      activeBtn: 'next',
    }

    this.changeSliderBtnState = this.changeSliderBtnState.bind(this);
  }

  changeSliderBtnState(e) {
    this.setState({activeBtn: e.target.id});
  }

  render() {
    const slides = [];

    for(const key in sliderImgs) {
      slides.push(
        <SwiperSlide key={key}>
          <img src={sliderImgs[key]} alt={`слайд${key.substr(-1)}`} />
        </SwiperSlide>
      )
    }

    return (
      <>
        <Swiper
          spaceBetween={230}
          slidesPerView={2}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next'
          }}
          loop
        >
          {slides}
        </Swiper>
        <button
          id="prev"
          className={`btn-prev ${styles.sliderPrev} ${this.state.activeBtn === "prev" ? styles.active : ''}`}
          onMouseOver={this.changeSliderBtnState}
        >
        </button>
        <button
          id="next"
          className={`btn-next ${styles.sliderNext} ${this.state.activeBtn === "next" ? styles.active : ''}`}
          onMouseOver={this.changeSliderBtnState}
        >
        </button>
      </>
    )
  }
}

export default Slider;