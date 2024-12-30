const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
	taskList.innerHTML = '';
	tasks.forEach((task, index) => {
		const li = document.createElement('li');
		li.classList.toggle('completed', task.completed);
		li.innerHTML = `
                <span>${task.text}</span>
                <button class="completeTask">Виконано</button>
                <button class="deleteTask">Видалити</button>
            `;
		taskList.appendChild(li);

		li.querySelector('.completeTask').addEventListener('click', function () {
			tasks[index].completed = !tasks[index].completed;
			saveTasks();
			renderTasks();
		});

		li.querySelector('.deleteTask').addEventListener('click', function () {
			tasks.splice(index, 1);
			saveTasks();
			renderTasks();
		});
	});
}

addTaskButton.addEventListener('click', function () {
	const taskText = taskInput.value.trim();
	if (taskText !== '') {
		tasks.push({ text: taskText, completed: false });
		saveTasks();
		renderTasks();
		taskInput.value = '';
	}
});

renderTasks();
