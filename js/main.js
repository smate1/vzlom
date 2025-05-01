$('.slides').slick({
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	adaptiveHeight: true,
	centerMode: true,
	// variableWidth: false,
	centerPadding: '45px', // 45px зліва + 45px справа = 90px між слайдами
	prevArrow:
		'<button type="button" class="slick-prev"><img src="./images/arrow-left.svg" alt="Назад"></button>',
	nextArrow:
		'<button type="button" class="slick-next"><img src="./images/arrow-right.svg" alt="Вперед"></button>',
})

