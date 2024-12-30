document.addEventListener('DOMContentLoaded', () => {
  const addTodoButton = document.getElementById('addTodo');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  const todoText = document.getElementById('todoText');
  const todoModal = new bootstrap.Modal(document.getElementById('todoModal'));

  addTodoButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = task;
      listItem.addEventListener('click', () => {
        todoText.textContent = task;
        todoModal.show();
      });
      todoList.appendChild(listItem);
      todoInput.value = '';
    }
  });
});
