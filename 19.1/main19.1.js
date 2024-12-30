const API_KEY = 'ключ_з_OpenWeatherMap';
const CITY = 'Kyiv'; // Змінюйте на потрібне місто
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ua`;

const weatherWidget = document.getElementById('weatherWidget');
const refreshButton = document.getElementById('refreshButton');

// Функція для отримання даних про погоду
async function fetchWeather() {
	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		displayWeather(data);
	} catch (error) {
		weatherWidget.innerHTML = `<p>Помилка завантаження даних</p>`;
		console.error(error);
	}
}

// Функція для відображення погоди
function displayWeather(data) {
	const { main, weather, wind, name } = data;
	weatherWidget.innerHTML = `
    <h2>${name}</h2>
    <p class="temp">${main.temp.toFixed(1)}°C</p>
    <p class="description">${weather[0].description}</p>
    <p>Вологість: ${main.humidity}%</p>
    <p>Тиск: ${main.pressure} hPa</p>
    <p>Вітер: ${wind.speed} м/с</p>
  `;
}

// Додаємо обробник для кнопки "Оновити"
refreshButton.addEventListener('click', fetchWeather);

// Завантаження погоди при старті
fetchWeather();
