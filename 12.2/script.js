const container = document.getElementById('buttonContainer');

container.addEventListener('click', function (event) {
	if (event.target.tagName === 'BUTTON') {
		alert(`Ви натиснули на ${event.target.textContent}`);
	}
});
