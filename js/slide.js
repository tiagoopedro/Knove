


// Swiper mobile
var swiperMobile = new Swiper(".mySwiper-slide-mobile", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-mobile",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-mobile",
    prevEl: ".swiper-button-prev-mobile",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});


// Swiper do slide histórico
var swiperHistorico = new Swiper(".mySwiper-slide-historico", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-historico",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-historico",
    prevEl: ".swiper-button-prev-historico",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



// Swiper serviço com responsividade
let swiperServicoInstance;

function slideServico() {
  function padraoSlideServico(numerodeSlides) {
    if (swiperServicoInstance) {
      swiperServicoInstance.destroy(true, true);
    }

    swiperServicoInstance = new Swiper(".mySwiper-servicos", {
      slidesPerView: numerodeSlides,
      spaceBetween: 40,
       breakpoints: { //breakpoint para a parte que simula no chrome
       100: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        2000: {
          slidesPerView: 3
        }
      },
      navigation: {
        nextEl: ".swiper-button-next-servico",
        prevEl: ".swiper-button-prev-servico",
      },
      pagination: {
        el: ".swiper-pagination-servico",
        clickable: true,
      },
    });
  }

  const largura = window.innerWidth;

  if (largura >= 2000) {
    padraoSlideServico(3);
  } else if (largura >= 992) {
    padraoSlideServico(2);
  } else {
    padraoSlideServico(1);
  }
}

slideServico();




// Swiper do slide loja com responsividade

let swiperLojaInstance;

function slideLoja() {
  function padraoSlideLoja(numerodeSlides) {
    // Destroi o swiper anterior, se existir
    if (swiperLojaInstance) {
      swiperLojaInstance.destroy(true, true);
    }

    swiperLojaInstance = new Swiper(".mySwiper-slide-loja", {
      slidesPerView: numerodeSlides,
      spaceBetween: 40,
       breakpoints: {
       100: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        1500: {
          slidesPerView: 3
        },
        1900: {
          slidesPerView: 4
        },
        2000: {
          slidesPerView: 5
        }
      }, 
      navigation: {
        nextEl: ".swiper-button-next-loja",
        prevEl: ".swiper-button-prev-loja",
      },
      pagination: {
        el: ".swiper-pagination-loja",
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  }

  const largura = window.innerWidth;

  if (largura >= 2000) {
    padraoSlideLoja(5);
  } else if (largura >= 1900) {
    padraoSlideLoja(4);
  } else if (largura >= 1500) {
    padraoSlideLoja(3);
  } else if (largura >= 992) {
    padraoSlideLoja(2);
  } else {
    padraoSlideLoja(1);
  }
}

slideLoja();




//menu tem que ficar no final
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


let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    slideServico();
    slideLoja();
  }, 300);
});

window.addEventListener("load", () => {
  slideServico();
  slideLoja();
});