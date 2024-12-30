import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>Головна</Link>
					</li>
					<li>
						<Link to='/about'>Про мене</Link>
					</li>
					<li>
						<Link to='/contacts'>Контакти</Link>
					</li>
				</ul>
			</nav>
			<button onClick={toggleTheme}>Змінити тему</button>
		</header>
	);
};

export default Header;
