import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

import ThemeContext from '../context/ThemeContext.js';

export default function NavBar() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	const activeLinkStyle = {
		color: '#9c1010'
	};

	return (
		<nav className='row space-between'>
			<ul className='row nav'>
				<li>
					<NavLink
						to='/'
						exact
						className='navb-link'
						activeStyle={activeLinkStyle}
					>
						Popular
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/battle'
						className='navb-link'
						activeStyle={activeLinkStyle}
					>
						Battle
					</NavLink>
				</li>
			</ul>
			<button className='btn-clear' onClick={toggleTheme}>
				{theme === 'light' ? (
					<FaToggleOff color='#414344' size={30} />
				) : (
					<FaToggleOn color='#dedee0' size={30} />
				)}
			</button>
		</nav>
	);
}
