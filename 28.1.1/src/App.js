import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import './styles.css';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<div className='container mt-5'>
			<h1 className='text-center mb-4'>TODO List</h1>
			<TodoForm addTodo={addTodo} />
			<ul className='list-group mt-4'>
				{todos.map((todo, index) => (
					<li key={index} className='list-group-item'>
						{todo}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
