import React from 'react';
import PropTypes from 'prop-types';
import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle
} from 'react-icons/fa';

import Tooltip from '../tooltips/Tooltip.js';

export default function RepoProfile({ login, stars, forks, issues }) {
	return (
		<React.Fragment>
			<ul className='card-list'>
				<Tooltip content="Repo's username">
					<li>
						<FaUser color='#ffc107' size={22} />{' '}
						<a href={`https://github.com/${login}`} target='_blank'>
							{login}
						</a>
					</li>
				</Tooltip>
				<li>
					<FaStar color='#ffeb3b' size={22} /> {stars.toLocaleString()} stars
				</li>
				<li>
					<FaCodeBranch color='#7ac1f3' size={22} /> {forks.toLocaleString()}{' '}
					forks
				</li>
				<li>
					<FaExclamationTriangle color='#ec7d7d' size={22} />{' '}
					{issues.toLocaleString()} open issues
				</li>
			</ul>
		</React.Fragment>
	);
}

RepoProfile.propTypes = {
	login: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired,
	forks: PropTypes.number.isRequired,
	issues: PropTypes.number.isRequired
};
