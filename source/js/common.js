if (Swiper) {
  const quotersSlider = new Swiper('.quotes__hidden', {
		effect: 'coverflow',
		slidesPerView: 'auto',
    roundLengths: true,
		centeredSlides: true,
    	coverflowEffect: {
			rotate: 0,
			stretch: 80,
			depth: 200,
			modifier: 1, // 2,3
			slideShadows : false,
		},// Отображать три слайда
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
