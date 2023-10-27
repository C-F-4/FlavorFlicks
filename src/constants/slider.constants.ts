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
    slidesToShow: 5,
    slidesToScroll: 5,
    easing: 'ease-out',
    speed: 1000,
    swipeToSlide: false,
    // lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesPerRow: 4,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesPerRow: 2,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
};
