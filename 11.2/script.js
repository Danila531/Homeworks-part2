const textBlock = document.getElementById('textBlock');
const button = document.getElementById('toggleButton');
let isColored = false;

button.addEventListener('click', function () {
	if (isColored) {
		textBlock.style.color = 'black';
	} else {
		textBlock.style.color = 'red';
	}
	isColored = !isColored;
});
