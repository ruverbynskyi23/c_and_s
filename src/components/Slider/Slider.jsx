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
          <img className={styles.sliderImage} src={sliderImgs[key]} alt={`slide-${key.substr(-1)}`} />
        </SwiperSlide>
      )
    }

    return (
      <div className={styles.sliderWrapper}>
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          autoHeight="true"
          breakpoints={{
            768: {
              spaceBetween: 32
            },
            1360: {
              spaceBetween: 170
            },
            1750: {
              spaceBetween: 230
            }
          }}
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
        
        <span className={styles.spacerText}>scissors handmade</span>

      </div>
    )
  }
}

export default Slider;