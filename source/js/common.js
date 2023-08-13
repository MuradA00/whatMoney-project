if (Swiper) {
  const quotersSlider = new Swiper('.quotes__hidden', {
    slidesPerView: 1, // Отображать три слайда
    centeredSlides: true,
    spaceBetween: 20,
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
