import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ header, avatar, login, url, score }) {
	return (
		<React.Fragment>
			<h4 className='header-lg center-text'>{header}</h4>
			<img className='avatar' src={avatar} alt={`Avatar fro ${login}`} />
			{score && <h4 className='center-text'>Score: {score}</h4>}
			<h2 className='center-text'>
				<a className='link' href={url} target='_blank'>
					{login}
				</a>
			</h2>
		</React.Fragment>
	);
}

Card.propTypes = {
	header: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	login: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	score: PropTypes.number
};
