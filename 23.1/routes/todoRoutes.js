const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/', async (req, res) => {
	const todo = new Todo({
		title: req.body.title,
		completed: req.body.completed,
	});
	const savedTodo = await todo.save();
	res.json(savedTodo);
});

router.get('/', async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
});

router.put('/:id', async (req, res) => {
	const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json(updatedTodo);
});

router.delete('/:id', async (req, res) => {
	await Todo.findByIdAndDelete(req.params.id);
	res.json({ message: 'Todo deleted' });
});

module.exports = router;
