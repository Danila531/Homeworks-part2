import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';

const Home = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<div>
			<h1>Список TODO</h1>
			<TodoForm addTodo={addTodo} />
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
