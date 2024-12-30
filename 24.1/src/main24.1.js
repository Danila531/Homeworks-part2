import React from 'react';

const App = () => {
	return (
		<div className='container mt-4'>
			<h1 className='text-center'>SWAPI Interface</h1>
			<div className='row mt-4'>
				<div className='col-md-4'>
					<h3>Categories</h3>
					<ul className='list-group'>
						<li className='list-group-item'>People</li>
						<li className='list-group-item'>Planets</li>
						<li className='list-group-item'>Films</li>
						<li className='list-group-item'>Species</li>
						<li className='list-group-item'>Vehicles</li>
						<li className='list-group-item'>Starships</li>
					</ul>
				</div>
				<div className='col-md-8'>
					<h3>Details</h3>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>Detail Title</h5>
							<p className='card-text'>
								Description of the selected item will appear here.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
