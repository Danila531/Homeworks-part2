import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('todo-list');
	const taskTextModal = document.getElementById('task-text');

	document.getElementById('add-task').addEventListener('click', () => {
		const taskText = taskInput.value.trim();
		if (taskText) {
			const taskItem = document.createElement('li');
			taskItem.className = 'list-group-item';
			taskItem.textContent = taskText;
			taskItem.setAttribute('data-bs-toggle', 'modal');
			taskItem.setAttribute('data-bs-target', '#taskModal');
			taskList.appendChild(taskItem);
			taskInput.value = '';
		}
	});

	taskList.addEventListener('click', event => {
		if (event.target.tagName === 'LI') {
			taskTextModal.textContent = event.target.textContent;
		}
	});
});
