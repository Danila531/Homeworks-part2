import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const TodoApp = () => {
	const [text, setText] = useState('');
	const todos = useSelector(state => state.todos);
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (text.trim()) {
			dispatch(addTodo(text));
			setText('');
		}
	};

	return (
		<div className='todo-app'>
			<h1>TODO</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={text}
					onChange={e => setText(e.target.value)}
					placeholder='Add a new todo'
				/>
				<button type='submit'>Добавить</button>
			</form>
			<h2>TODOS</h2>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
			<footer>Всего: {todos.length}</footer>
		</div>
	);
};

export default TodoApp;
