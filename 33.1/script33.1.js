import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp'; // Приклад компонента TODO

describe('TODO App Tests', () => {
	test('Сторінка має заголовок TODO', () => {
		render(<TodoApp />);
		const heading = screen.getByText(/TODO/i);
		expect(heading).toBeInTheDocument();
	});

	test('Поле для тексту приймає як цифри, так і букви', () => {
		render(<TodoApp />);
		const input = screen.getByPlaceholderText(/введіть завдання/i);
		fireEvent.change(input, { target: { value: '123ABC' } });
		expect(input.value).toBe('123ABC');
	});

	test('Кнопка "Додати" видає помилку при порожньому введенні', () => {
		render(<TodoApp />);
		const addButton = screen.getByText(/Додати/i);
		fireEvent.click(addButton);
		const errorMessage = screen.getByText(/Будь ласка, введіть текст/i);
		expect(errorMessage).toBeInTheDocument();
	});

	test('Після введення тексту та натискання "Додати" з’являється новий елемент', () => {
		render(<TodoApp />);
		const input = screen.getByPlaceholderText(/введіть завдання/i);
		const addButton = screen.getByText(/Додати/i);

		fireEvent.change(input, { target: { value: 'Нове завдання' } });
		fireEvent.click(addButton);

		const newTask = screen.getByText(/Нове завдання/i);
		expect(newTask).toBeInTheDocument();
	});

	test('Новий елемент має правильний текст', () => {
		render(<TodoApp />);
		const input = screen.getByPlaceholderText(/введіть завдання/i);
		const addButton = screen.getByText(/Додати/i);

		const taskText = 'Протестувати TODO';
		fireEvent.change(input, { target: { value: taskText } });
		fireEvent.click(addButton);

		const newTask = screen.getByText(taskText);
		expect(newTask.textContent).toBe(taskText);
	});
});
