const API_URL = 'http://localhost:3000/api/todos';

const fetchTodos = async () => {
  const response = await fetch(API_URL);
  const todos = await response.json();
  const list = document.getElementById('todo-list');
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.title;
    li.className = todo.completed ? 'completed' : '';
    li.addEventListener('click', () => toggleTodo(todo._id, !todo.completed));
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodo(todo._id));
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
};

const addTodo = async () => {
  const input = document.getElementById('todo-input');
  const title = input.value;
  if (title) {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    input.value = '';
    fetchTodos();
  }
};

const toggleTodo = async (id, completed) => {
  await fetch(${API_URL}/${id}, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed }),
  });
  fetchTodos();
};

const deleteTodo = async (id) => {
  await fetch(${API_URL}/${id}, { method: 'DELETE' });
  fetchTodos();
};

document.getElementById('add-btn').addEventListener('click', addTodo);
fetchTodos();