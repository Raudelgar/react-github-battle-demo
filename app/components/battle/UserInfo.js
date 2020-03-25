import React from 'react';
import PropTypes from 'prop-types';
import {
	FaUser,
	FaCompass,
	FaBriefcase,
	FaUsers,
	FaUserFriends,
	FaCode
} from 'react-icons/fa';

import Card from '../card/Card.js';

export default function UserInfo({ profile, score, header }) {
	const {
		avatar_url,
		login,
		name,
		html_url,
		location,
		company,
		followers,
		following,
		public_repos
	} = profile;

	return (
		<React.Fragment>
			<Card
				header={header}
				avatar={avatar_url}
				login={login}
				url={html_url}
				score={score}
			/>
			<ul className='card-list'>
				{name && (
					<li>
						<FaUser color='#f57f76' size={22} /> {name}
					</li>
				)}
				{location && (
					<li>
						<FaCompass color='#823ff9' size={22} /> {location}
					</li>
				)}
				{company && (
					<li>
						<FaBriefcase color='#795548' size={22} /> {company}
					</li>
				)}
				<li>
					<FaUsers color='#90d4f3' size={22} /> {followers.toLocaleString()}{' '}
					followers
				</li>
				<li>
					<FaUserFriends color='#4caf50' size={22} />{' '}
					{following.toLocaleString()} following
				</li>
				<li>
					<FaCode color='#484747' size={22} /> {public_repos.toLocaleString()}{' '}
					repositories
				</li>
			</ul>
		</React.Fragment>
	);
}

UserInfo.propTypes = {
	profile: PropTypes.object.isRequired,
	score: PropTypes.number,
	header: PropTypes.string.isRequired
};
