
function mudouTamanho() { 
    if (window.innerWidth >= 992) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu(perfil) { 
    if (perfil.style.display == 'block') {
        perfil.style.display = 'none'
    } 
    else {
        perfil.style.display = 'block'
    } 
}


 const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if(!immediate) func.apply (context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
 };

 const target = document.querySelectorAll('[data-anime]');
 const animationClass = 'animate';

 function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.5);
   
    target.forEach(function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(animationClass) 
        }
    })
 }

 if(target.length) { 
 window.addEventListener('scroll', debounce(function() {
    animeScroll();
 }, 200));
}




const menu = document.getElementById('menu'); 
const slider = document.getElementById('swiper-historico');
let scrollPrev = window.pageYOffset;

function verificarScroll() {
    const scrollActual = window.pageYOffset;
    
    if (scrollActual < scrollPrev) {
        menu.style.opacity = '1';
        menu.classList.add('menu-fixo'); 
        slider.classList.add('posicao-slider');
    } 
    else if (scrollActual === 0 && window.innerWidth >= 992 ) {
       menu.style.opacity = '1'; 
    }
    else if (scrollActual > scrollPrev && window.innerWidth >= 992){
        menu.classList.remove('menu-fixo'); 
        slider.classList.remove('posicao-slider');
        menu.style.opacity = '0';
    }

    scrollPrev = scrollActual;

}

window.addEventListener('scroll', verificarScroll); 


verificarScroll();