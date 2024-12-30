function createMultiplicationTable() {
	const table = document.createElement('table');

	for (let row = 1; row <= 10; row++) {
		const tr = document.createElement('tr');

		for (let col = 1; col <= 10; col++) {
			const td = document.createElement('td');
			td.textContent = row * col;
			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	return table;
}

const tableContainer = document.getElementById('tableContainer');
tableContainer.appendChild(createMultiplicationTable());
