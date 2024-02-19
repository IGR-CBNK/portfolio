
/* scrpt для слайдеров */
let slide_current = 0;
const slides = document.querySelectorAll('.slider-slide');
const controls = document.querySelectorAll('.slide-controls-button');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

function updateSlides() {
	slides.forEach(el => el.classList.remove('d-block'));
	controls.forEach(el => el.classList.remove('active'));

	slides[slide_current].classList.add('d-block');
	controls[slide_current].classList.add('active');
}

controls.forEach((button, index) => {
	button.addEventListener('click', () => {
		slide_current = index;
		updateSlides();
	});
});

prevButton.addEventListener('click', () => {
	slide_current = (slide_current + slides.length - 1) % slides.length;
	updateSlides();
});

nextButton.addEventListener('click', () => {
	slide_current = (slide_current + 1) % slides.length;
	updateSlides();
});

// Инициализация первоначального состояния
updateSlides();



