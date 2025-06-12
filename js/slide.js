var swiper = new Swiper(".mySwiper-slide-historico", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



function slideLoja() {

function padraoSlideLoja(numerodeSlides) {
  var swiper = new Swiper(".mySwiper-slide-loja", {
    slidesPerView: numerodeSlides,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
}

  if (window.innerWidth >= 2000) {
    padraoSlideLoja(5)
  }
  else if (window.innerWidth >= 1900) {
    padraoSlideLoja(4)
  }
  else if (window.innerWidth >= 1500) {
    padraoSlideLoja(3)
  }

  else if (window.innerWidth >= 992) {
    padraoSlideLoja(2)
  }

  else {
    padraoSlideLoja(1)
  }}
  slideLoja();

  var swiper = new Swiper(".mySwiper-slide-mobile", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });


  function slideServico() {

    function padraoSlideServico(numerodeSlides) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: numerodeSlides,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
}

    if (window.innerWidth >= 2000) {
      padraoSlideServico(3)
    }
    else if (window.innerWidth >= 992) {
     padraoSlideServico(2)
    }
    else {
     padraoSlideServico(1)
    }
  }
  slideServico()


  var menuButton = document.querySelector('.menu-button');
  var openMenu = function () {
    swiper.slidePrev();
  };
  var swiper = new Swiper('.burguer', {
    slidesPerView: 'auto',
    initialSlide: 1,
    resistanceRatio: 0,
    slideToClickedSlide: true,
    on: {
      slideChangeTransitionStart: function () {
        var slider = this;
        if (slider.activeIndex === 0) {
          menuButton.classList.add('cross');
          // required because of slideToClickedSlide
          menuButton.removeEventListener('click', openMenu, true);
        } else {
          menuButton.classList.remove('cross');
        }
      },
      slideChangeTransitionEnd: function () {
        var slider = this;
        if (slider.activeIndex === 1) {
          menuButton.addEventListener('click', openMenu, true);
        }
      },
    },
  });





