/* 검색 */
const headerEl = document.querySelector('header')
const headerMenuEls = [...headerEl.querySelectorAll('ul.sub-nav-list > li')]
const searchBtnEl = headerEl.querySelector('.search-btn')
const searchEl = headerEl.querySelector('.search-area')
const searchCloseEl = searchEl.querySelector('.close-ico')
const searchDimmedEl = searchEl.querySelector('.dimmed-layer')
const searchInputEl = searchEl.querySelector('input')
const searchDelayEls = [...searchEl.querySelectorAll('li')]
const duration = .4

searchBtnEl.addEventListener('click', showSearch)
searchCloseEl.addEventListener('click', event =>  {
  event.stopPropagation()
  hideSearch()
} )
searchDimmedEl.addEventListener('click',hideSearch)

function showSearch() {
  headerEl.classList.add('searching')
  stopScroll()
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / headerMenuEls.length}s`
  })
  searchDelayEls.forEach((el, index) =>  {
    el.style.transitionDelay = `${index * duration / searchDelayEls.length}s`
  })
  setTimeout(() => {
    searchInputEl.focus()
  }, 600);
}

function hideSearch() {
  headerEl.classList.remove('searching')
  playScroll()
  headerMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / headerMenuEls.length}s`
  })
  searchDelayEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = `${index * duration / searchDelayEls.length}s`
  })
  searchDelayEls.reverse()
  searchInputEl.value = ''
}



/* 스크롤방지 */
function stopScroll() {
  document.documentElement.classList.add('fixed')
}
function playScroll() {
  document.documentElement.classList.remove('fixed')
}



/* Sec01(Visual) - fade in */
const fadeEls =document.querySelectorAll('.visual-area .fade-in')
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  })
})

/* Sec02(promotion) - toggle */
const promotionEl = document.querySelector('.promo-swiper-area .common-inner');
const promotionToggleBtn = document.querySelector('.promo-title');
const promotionArrowIco = promotionToggleBtn.querySelector('.promo-toggle-btn');

promotionToggleBtn.addEventListener('click', () => {
  promotionEl.classList.toggle('hidden');
  promotionArrowIco.classList.toggle('hidden');
});



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
