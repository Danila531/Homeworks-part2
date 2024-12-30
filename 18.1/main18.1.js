// Встановлюємо початковий час у секундах
let totalTime = 87; // Наприклад, 1 хвилина і 27 секунд

// Функція для оновлення таймера
function updateTimer() {
	// Обчислення хвилин і секунд
	const minutes = Math.floor(totalTime / 60);
	const seconds = totalTime % 60;

	// Форматування часу (додаємо 0, якщо число менше 10)
	const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;

	// Відображення часу на сторінці
	document.getElementById('timer').textContent = formattedTime;

	// Перевірка: якщо час закінчився, зупиняємо таймер
	if (totalTime <= 0) {
		clearInterval(timerInterval); // Зупиняємо інтервал
	} else {
		totalTime--; // Зменшуємо час на 1 секунду
	}
}

// Запускаємо таймер із оновленням щосекунди
const timerInterval = setInterval(updateTimer, 1000);

// Викликаємо функцію одразу, щоб показати початковий час
updateTimer();
