/* Configuracion Swiper */
/* -- Swiper Inicio -- */
let SwiperInicio = new Swiper('.inicio__swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
});

/* -- Swiper Testimonios -- */
let swiperTestimonios = new Swiper('.testimonios__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.button-next',
        prevEl: 'button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        400: {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
    },
});

/* Funcion para agregar/quitar la clase active al header cuando se haga scroll */
window,addEventListener('scroll', function () {
    let header = this.document.querySelector('header');
    header.classList.toggle('active', this.window.scrollY > 0);
})

/* ScrollReveal */
ScrollReveal().reveal('.inicio', {
    duration: 1000,
    origin: 'bottom',
    distance: '20px'
});

ScrollReveal().reveal('.container__texto h1', {
    duration: 3000,
    origin: 'left',
    distance: '20px'
});

ScrollReveal().reveal('.container__texto p', {
    duration: 4000,
    origin: 'left',
    distance: '20px'
});

ScrollReveal().reveal('.titulo', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px'
});

ScrollReveal().reveal('.tours__cards', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px'
});

ScrollReveal().reveal('.testimonios__swiper', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px'
});

ScrollReveal().reveal('.reserva .titulo', {
    duration: 2000,
    origin: 'left',
    distance: '20px'
});

ScrollReveal().reveal('.reserva__container-form', {
    duration: 2000,
    origin: 'right',
    distance: '20px'
});

ScrollReveal().reveal('.newsletter', {
    duration: 2000,
    origin: 'bottom',
    distance: '20px'
});

/* Mostrar/ocultar menu */
let nav = document.querySelector('.nav');
let enlaces = document.querySelectorAll('.nav__link');
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu i')

// Con esta funcion cambiaremos el icono del boton del menu cuando hagamos cliek en el
function cambiarIcono() {
    if (nav.classList.contains('active')) {
        menuIcon.classList.remove('ri-menu-3-line');
        menuIcon.classList.add('ri-close-large-fill');
    } else {
        menuIcon.classList.remove('ri-close-large-fill');
        menuIcon.classList.add('ri-menu-3-line');
    }
}

// Al hacer click en el boton del menu, se colocara/quitara la clase activa y llamamos a la funcion cambiarIcono()
menu.addEventListener('click', function () {
    nav.classList.toggle('active');
    cambiarIcono()
});

// Con esta funcion, se ocultara el menu cuando se haga click en alguno de los enlaces del menu
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function () {
        nav.classList.remove('active');
        cambiarIcono();
    })
});