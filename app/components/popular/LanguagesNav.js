import React from 'react';
import PropTypes from 'prop-types';

export default function LanguagesNav({ selected, onUpdateLanguage }) {
	const languages = ['all', 'javascript', 'ruby', 'java', 'css', 'python'];

	return (
		<ul className='flex-center'>
			{languages.map((lang) => (
				<li key={lang}>
					<button
						className={`btn-clear nav-link ${
							selected === lang ? 'selectedBtn' : ''
						}`}
						onClick={() => onUpdateLanguage(lang)}
					>
						{lang}
					</button>
				</li>
			))}
		</ul>
	);
}

LanguagesNav.propTypes = {
	selected: PropTypes.string.isRequired,
	onUpdateLanguage: PropTypes.func.isRequired,
};
