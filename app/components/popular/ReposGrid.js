import React from 'react';
import PropTypes from 'prop-types';
import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle
} from 'react-icons/fa';

import Repo from './Repo.js';
import Card from '../card/Card.js';

export default function ReposGrid({ repos }) {
	return (
		<ul className='grid space-around'>
			{repos.map((repo, index) => {
				const { owner, html_url, stargazers_count, forks, open_issues } = repo;
				const { login, avatar_url } = owner;
				return (
					<li key={repo.id} className='repo bg-light'>
						<Card
							header={`#${index + 1}`}
							avatar={avatar_url}
							login={login}
							url={html_url}
						>
							<ul className='card-list'>
								<li>
									<FaUser color='#ffc107' size={22} />{' '}
									<a href={`https://github.com/${login}`} target='_blank'>
										{login}
									</a>
								</li>
								<li>
									<FaStar color='#ffeb3b' size={22} />{' '}
									{stargazers_count.toLocaleString()} stars
								</li>
								<li>
									<FaCodeBranch color='#7ac1f3' size={22} />{' '}
									{forks.toLocaleString()} forks
								</li>
								<li>
									<FaExclamationTriangle color='#ec7d7d' size={22} />{' '}
									{open_issues.toLocaleString()} open issues
								</li>
							</ul>
						</Card>
					</li>
				);
			})}
		</ul>
	);
}

ReposGrid.propTypes = {
	repos: PropTypes.array.isRequired
};
