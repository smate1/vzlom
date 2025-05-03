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
		'<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Назад"></button>',
	nextArrow:
		'<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Вперед"></button>',
})
const customSelect = document.getElementById('custom-select')
const trigger = customSelect.querySelector('.custom-select__trigger')
const options = customSelect.querySelectorAll('.custom-option')
const valueSpan = trigger.querySelector('span')

trigger.addEventListener('click', () => {
	customSelect.classList.toggle('open')
})

options.forEach(option => {
	option.addEventListener('click', () => {
		options.forEach(o => o.classList.remove('selected'))
		option.classList.add('selected')
		valueSpan.textContent = option.dataset.value
		customSelect.classList.remove('open')
	})
})

document.addEventListener('click', e => {
	if (!customSelect.contains(e.target)) {
		customSelect.classList.remove('open')
	}
})

const footerSelect = document.getElementById('custom-select-footer')
const footerTrigger = footerSelect.querySelector('.custom-select__trigger')
const footerOptions = footerSelect.querySelectorAll('.custom-option')
const footerValueSpan = footerTrigger.querySelector('span')

footerTrigger.addEventListener('click', () => {
	footerSelect.classList.toggle('open')
})

footerOptions.forEach(option => {
	option.addEventListener('click', () => {
		footerOptions.forEach(o => o.classList.remove('selected'))
		option.classList.add('selected')
		footerValueSpan.textContent = option.dataset.value
		footerSelect.classList.remove('open')
	})
})

document.addEventListener('click', e => {
	if (!footerSelect.contains(e.target)) {
		footerSelect.classList.remove('open')
	}
})

