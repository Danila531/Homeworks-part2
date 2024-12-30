const images = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg',
	'6.jpg',
	'7.jpg',
	'8.jpg',
	'9.jpg',
];
const imageContainer = document.getElementById('image-container');
const randomButton = document.getElementById('show-random-image');

randomButton.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * images.length);
	const randomImage = images[randomIndex];

	imageContainer.innerHTML = '';
	const imgElement = document.createElement('img');
	imgElement.src = randomImage;
	imgElement.alt = 'Випадкове зображення';
	imgElement.style.maxWidth = '100%';

	imageContainer.appendChild(imgElement);
});
