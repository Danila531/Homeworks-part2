import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
	const [input, setInput] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (input) {
			addTodo(input);
			setInput('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder='Додати нове завдання'
			/>
			<button type='submit'>Додати</button>
		</form>
	);
};

export default TodoForm;
