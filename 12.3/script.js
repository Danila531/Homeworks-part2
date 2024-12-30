const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');

addTaskButton.addEventListener('click', function () {
	const taskText = taskInput.value.trim();
	if (taskText !== '') {
		const li = document.createElement('li');
		li.innerHTML = `${taskText} <button class="deleteTask">Видалити</button>`;
		taskList.appendChild(li);
		taskInput.value = '';
	}
});

taskList.addEventListener('click', function (event) {
	if (event.target.classList.contains('deleteTask')) {
		event.target.parentElement.remove();
	}
});
