import React from 'react';
import PropTypes from 'prop-types';

import Repo from './Repo.js';

export default function ReposGrid({ repos }) {
	return (
		<ul className='grid space-around'>
			{repos.map((repo, index) => (
				<li key={repo.id} className='repo bg-light'>
					<Repo index={index + 1} repo={repo} />
				</li>
			))}
		</ul>
	);
}

ReposGrid.propTypes = {
	repos: PropTypes.array.isRequired
};
