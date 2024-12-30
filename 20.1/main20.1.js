$(document).ready(function () {
	$('#addTodo').on('click', function () {
		const task = $('#todoInput').val();
		if (task.trim() !== '') {
			const listItem = $(`<li class="list-group-item">${task}</li>`);
			listItem.on('click', function () {
				$('#todoText').text(task);
				$('#todoModal').modal('show');
			});
			$('#todoList').append(listItem);
			$('#todoInput').val('');
		}
	});
});
