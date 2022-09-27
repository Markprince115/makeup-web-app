const pageSlide = document.querySelector('#makeupslide');

pageSlide.addEventListener('click', (e) => {
    e.preventDefault();

    pageSlide.style.backgroundColor = 'white';
})

// Slider js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});