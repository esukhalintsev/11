$('.slick-slider').slick({
  infinite: true,
  centerMode: true,
  arrows: true,
  centerPadding: '0px',
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        arrows: true
      }
        },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        arrows: false
      }
        }
      ]
});
