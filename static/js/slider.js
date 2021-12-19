$('.testimonial-card-container').slick({        
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    // draggable:true,
    // fade: true,
    cssEase: 'linear',
    nextArrow: $('.next'),
    prevArrow: $('.previous'),
    pauseOnDotsHover: true,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 700,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 540,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1080) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})