const base = {
  dots: true,
  infinite: false,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export const SETTINGS = {
  DEFAULT: { ...base },
  GALLERY: {
    ...base,
    slidesPerRow: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    easing: 'ease-out',
    speed: 1000,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
  }
};
