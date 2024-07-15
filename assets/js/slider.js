var swiper = new Swiper(".service__swiper", {
    spaceBetween: 1,
    slidesPerView: 4,
    loop: true,
    // autoplay:{
    //   delay:3000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      280:{
          slidesPerView:1.38
          
      },
      992:{
          slidesPerView:3
      },
      1200:{
        slidesPerView:4
      }

    }
  });

  var teamSwiper = new Swiper(".team__swiper", {
    spaceBetween: 1,
    slidesPerView: 3,
    loop: true,
    // autoplay:{
    //   delay:3000,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      280:{
          slidesPerView:1
          
      },
      992:{
          slidesPerView:2
      },
      1200:{
        slidesPerView:3
      }

    }
  });