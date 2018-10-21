$(document).ready(function(){
  // Slick SLider Customization
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="btn btn-dark slider-prev" aria-label="Previous"><i class="flaticon-left-arrow"></i></button>',
    nextArrow: '<button type="button" class="btn btn-dark slider-next" aria-label="Previous"><i class="flaticon-right-arrow"></i></i></button>',
    infinite: true
  });
  
  $('.company-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="btn company-slider-prev" aria-label="Previous"><i class="flaticon-left-chevron"></i></button>',
    nextArrow: '<button type="button" class="btn company-slider-next" aria-label="Previous"><i class="flaticon-right-chevron"></i></i></button>',
    infinite: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Set max date on the quote to today's date:
  document.getElementById('quote-dob').max = new Date(new Date().getTime()).toISOString().split("T")[0];
});