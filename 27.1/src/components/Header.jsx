import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

const App = () => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		document.body.className = theme;
	};

	return (
		<div>
			<Router>
				<Header toggleTheme={toggleTheme} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
