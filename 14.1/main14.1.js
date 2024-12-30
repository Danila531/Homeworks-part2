const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = slideImages.length;

// Додавання точок навігації
for (let i = 0; i < totalSlides; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	if (i === 0) dot.classList.add('active');
	dot.dataset.index = i;
	dotsContainer.appendChild(dot);
}

// Оновлення стану слайдера
function updateSlider() {
	slides.style.transform = `translateX(-${currentIndex * 100}%)`;

	// Відображення/ховання кнопок
	prevBtn.classList.toggle('hidden', currentIndex === 0);
	nextBtn.classList.toggle('hidden', currentIndex === totalSlides - 1);

	// Оновлення активних точок
	document.querySelectorAll('.dot').forEach((dot, index) => {
		dot.classList.toggle('active', index === currentIndex);
	});
}

// Клік на кнопку Next
nextBtn.addEventListener('click', () => {
	if (currentIndex < totalSlides - 1) {
		currentIndex++;
		updateSlider();
	}
});

// Клік на кнопку Prev
prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		updateSlider();
	}
});

// Клік на точки
dotsContainer.addEventListener('click', e => {
	if (e.target.classList.contains('dot')) {
		currentIndex = parseInt(e.target.dataset.index, 10);
		updateSlider();
	}
});
