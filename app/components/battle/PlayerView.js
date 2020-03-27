import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { ThemeContext } from '../theme/ThemeContext.js';

export default function PlayerView({ username, onReset, label }) {
	return (
		<ThemeContext.Consumer>
			{theme => (
				<div className='column player'>
					<h3 className='player-label'>{label}</h3>
					<div className={`row ${theme}`}>
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
			)}
		</ThemeContext.Consumer>
	);
}

PlayerView.propTypes = {
	username: PropTypes.string.isRequired,
	onReset: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};
