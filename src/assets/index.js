const generalPics = {
  'logo': require('./logo.svg').default,
  'scissors': require('./scissors.jpg').default,
  'scissors2': require('./scissors2.jpg').default
};

const social = {
  'inst': require('./social/instagram.svg').default,
  'viber': require('./social/viber.svg').default,
  'tlgm': require('./social/telegram.svg').default,
};

const advantages = {
  'handmade': require('./advantages/handmade.svg').default,
  'quality': require('./advantages/quality.svg').default,
  'sharpening': require('./advantages/sharpening.svg').default,
  'uniqueness': require('./advantages/uniqueness.svg').default,
};

const btnSymbols = {
  'secondaryBtn': require('./btn/secondary_btn.svg').default,
  'arrow': require('./btn/arrow.svg').default,
  'arrowLft': require('./btn/arrow_left.svg').default,
  'arrowRght': require('./btn/arrow_right.svg').default
};

const sliderImgs = {
  'slide1': require('./slider/slide1.jpg').default,
  'slide2': require('./slider/slide2.jpg').default,
  'slide3': require('./slider/slide3.jpg').default,
  'slide4': require('./slider/slide4.jpg').default
};

const aboutUs = {};

for(let i = 0; i < 7; i++) {
  aboutUs[`pic${i + 1}`] = require(`./about/about${i + 1}.jpg`).default;
}

export {
  generalPics,
  social,
  advantages,
  btnSymbols,
  sliderImgs,
  aboutUs
}