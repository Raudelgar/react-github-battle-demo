import React from 'react';
import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle
} from 'react-icons/fa';

export default function Repo({ index, repo }) {
	const { owner, html_url, stargazers_count, forks, open_issues } = repo;
	const { login, avatar_url } = owner;
	return (
		<React.Fragment>
			<h4 className='header-lg center-text'>#{index}</h4>
			<img className='avatar' src={avatar_url} alt={`Avatar fro ${login}`} />
			<h2 className='center-text'>
				<a className='link' href={html_url} target='_blank'>
					{login}
				</a>
			</h2>
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
					<FaCodeBranch color='#7ac1f3' size={22} /> {forks.toLocaleString()}{' '}
					forks
				</li>
				<li>
					<FaExclamationTriangle color='#ec7d7d' size={22} />{' '}
					{open_issues.toLocaleString()} open issues
				</li>
			</ul>
		</React.Fragment>
	);
}
