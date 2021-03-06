import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import ThemeContext from '../context/ThemeContext.js';

export default function PlayerView({ username, onReset, label }) {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='column player'>
			<h3 className='player-label'>{label}</h3>
			<div className={`row bg-${theme}`}>
				<div className='player-info'>
					<img
						className='avatar-small'
						src={`https://github.com/${username}.png?size=200`}
						alt={`Avatar for ${username}`}
					/>
					<a
						href={`https://github.com/${username}`}
						className='link'
						target='_blank'
					>
						{username}
					</a>
				</div>
				<button className='btn-clear flex-center' onClick={onReset}>
					<FaTimesCircle
						color='#c2392a'
						size={26}
						style={{ cursor: 'pointer' }}
					/>
				</button>
			</div>
		</div>
	);
}

PlayerView.propTypes = {
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};
