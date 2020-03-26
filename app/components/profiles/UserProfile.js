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

const styleTooltip = {
	container: {
		position: 'relative',
		display: 'flex'
	},
	tooltip: {
		boxSizing: 'border-box',
		position: 'absolute',
		width: '160px',
		bottom: '100%',
		left: '50%',
		marginLeft: '-80px',
		borderRadius: '0.2em',
		backgroundColor: '#6e6a6a',
		padding: '7px',
		marginBottom: '5px',
		color: '#fff',
		textAlign: 'center',
		fontSize: '0.9rem'
	}
};

export default class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hoveringLocation: false,
			hoveringCompany: false
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver(key) {
		this.setState({
			[key]: true
		});
	}

	handleMouseOut(key) {
		this.setState({
			[key]: false
		});
	}

	render() {
		const {
			name,
			location,
			company,
			followers,
			following,
			public_repos
		} = this.props.profile;
		const { hoveringCompany, hoveringLocation } = this.state;

		return (
			<ul className='card-list'>
				{name && (
					<li>
						<FaUser color='#f57f76' size={22} /> {name}
					</li>
				)}
				{location && (
					<li
						className='tool-container'
						onMouseOver={() => this.handleMouseOver('hoveringLocation')}
						onMouseOut={() => this.handleMouseOut('hoveringLocation')}
					>
						{hoveringLocation && <div className='tooltip'>User's Location</div>}
						<FaCompass color='#823ff9' size={22} /> {location}
					</li>
				)}
				{company && (
					<li
						className='tool-container'
						onMouseOver={() => this.handleMouseOver('hoveringCompany')}
						onMouseOut={() => this.handleMouseOut('hoveringCompany')}
					>
						{hoveringCompany && <div className='tooltip'>User's Company</div>}
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
		);
	}
}

UserProfile.propTypes = {
	profile: PropTypes.object.isRequired
};
