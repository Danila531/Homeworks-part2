const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	const name = document.querySelector('.name').value.trim();
	const message = document.querySelector('.message').value.trim();
	const phone = document.querySelector('.phone').value.trim();
	const email = document.querySelector('.email').value.trim();

	let isValid = true;

	document.querySelector('.nameError').textContent = '';
	document.querySelector('.messageError').textContent = '';
	document.querySelector('.phoneError').textContent = '';
	document.querySelector('.emailError').textContent = '';

	// Валідація ім'я
	if (name === '') {
		document.querySelector('.nameError').textContent = "Ім'я є обов'язковим";
		isValid = false;
	}

	// Валідація повідомлення
	if (message.length < 5) {
		document.querySelector('.messageError').textContent =
			'Повідомлення повинно містити не менше 5 символів';
		isValid = false;
	}

	// Валідація номера телефону
	const phoneRegex = /^\+380\d{9}$/;
	if (!phoneRegex.test(phone)) {
		document.querySelector('.phoneError').textContent =
			'Номер телефону повинен починатися з +380 і містити 9 цифр після цього';
		isValid = false;
	}

	// Валідація email
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (!emailRegex.test(email)) {
		document.querySelector('.emailError').textContent =
			'Email повинен містити @ та крапку';
		isValid = false;
	}

	if (isValid) {
		console.log({
			name,
			message,
			phone,
			email,
		});
	}
});
