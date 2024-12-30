let userLink = '';

const enterLinkButton = document.getElementById('enterLink');
const goToLinkButton = document.getElementById('goToLink');

enterLinkButton.addEventListener('click', function () {
	userLink = prompt('Введіть посилання (включаючи https:// або http://):');
	if (userLink) {
		if (!userLink.startsWith('http://') && !userLink.startsWith('https://')) {
			userLink = 'https://' + userLink;
		}
		goToLinkButton.disabled = false;
	}
});

goToLinkButton.addEventListener('click', function () {
	if (userLink) {
		window.location.href = userLink;
	}
});
