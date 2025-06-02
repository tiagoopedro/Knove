
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


function numeroSlide() {
  if (window.innerWidth >= 2000) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
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
  else if (window.innerWidth >= 992) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
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
  else if (window.innerWidth >= 768) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
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
  else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    })
  }
}
numeroSlide()


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

 



