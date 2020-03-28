import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/Card.js';
import RepoProfile from '../profiles/RepoProfile.js';
import { ThemeConsumer } from '../context/ThemeContext.js';

export default function ReposGrid({ repos }) {
	return (
		<ThemeConsumer>
			{({ theme }) => (
				<ul className='grid space-around'>
					{repos.map((repo, index) => {
						const {
							owner,
							html_url,
							stargazers_count,
							forks,
							open_issues
						} = repo;
						const { login, avatar_url } = owner;
						return (
							<li key={repo.id} className={`repo bg-${theme}`}>
								<Card
									header={`#${index + 1}`}
									avatar={avatar_url}
									login={login}
									url={html_url}
								>
									<RepoProfile
										login={login}
										stars={stargazers_count}
										forks={forks}
										issues={open_issues}
									/>
								</Card>
							</li>
						);
					})}
				</ul>
			)}
		</ThemeConsumer>
	);
}

ReposGrid.propTypes = {
	repos: PropTypes.array.isRequired
};
