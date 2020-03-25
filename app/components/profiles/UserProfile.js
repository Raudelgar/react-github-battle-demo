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

export default function UserProfile({ profile }) {
	const {
		name,
		location,
		company,
		followers,
		following,
		public_repos
	} = profile;

	return (
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
				<FaUserFriends color='#4caf50' size={22} /> {following.toLocaleString()}{' '}
				following
			</li>
			<li>
				<FaCode color='#484747' size={22} /> {public_repos.toLocaleString()}{' '}
				repositories
			</li>
		</ul>
	);
}

UserProfile.propTypes = {
	profile: PropTypes.object.isRequired
};
