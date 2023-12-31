if (Swiper) {
  const quotersSlider = new Swiper('.quotes__hidden', {
		effect: 'coverflow',
		slidesPerView: 1,
    spaceBetween: 20,
    speed: 500,
    pagination: {
      el: '.quotes__slider-pag', // Элемент контейнера буллетов
      clickable: true, // Сделать буллеты кликабельными
    },
  })
}

if (AOS) {
  AOS.init({
    once: true
  })
}
