import React, { useState } from 'react';
import TodoForm from './TodoForm';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<div className='container'>
			<h1>TODO List</h1>
			<TodoForm addTodo={addTodo} />
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
