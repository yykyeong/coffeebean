/* Swiper */
new Swiper('.notice-promo-area .swiper',{
  direction: 'vertical',
  autoplay: true,
  loop: true,
}); 

new Swiper('.promo-swiper-area .swiper', {
  autoplay: {
    delay: 5000 
  },
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 10, 
  centeredSlides: true,
  pagination: {
    el: '.promo-swiper-area .swiper-pagination',
    clickable: true 
  },
  navigation: { 
    prevEl: '.promo-swiper-area .swiper-prev', 
    nextEl: '.promo-swiper-area .swiper-next' 
  }
});
