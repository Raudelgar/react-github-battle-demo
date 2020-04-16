import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../context/ThemeContext.js';

export default function Players(props) {
	const [username, setUsername] = useState('');
	const { theme } = useContext(ThemeContext);

	const handleUsernameInput = e => {
		const value = e.target.value;
		setUsername(value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit(username);
		setUsername('');
	};

	return (
		<form className='column player' onSubmit={handleSubmit}>
			<label htmlFor='username' className='player-label'>
				{props.label}
			</label>
			<div className='row player-inputs'>
				<input
					type='text'
					id='username'
					className={`input-${theme}`}
					value={username}
					placeholder='github username'
					autoComplete='off'
					onChange={handleUsernameInput}
				/>
				<button
					type='submit'
					className={`btn ${theme === 'light' ? 'dark-btn' : 'light-btn'}`}
					disabled={!username}
				>
					Submit
				</button>
			</div>
		</form>
	);
}

Players.propTypes = {
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
};
