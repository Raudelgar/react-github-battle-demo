import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// import withHover from '../../utils/withHover.js';
import Hover from '../../utils/Hover.js';
import ThemeContext from '../context/ThemeContext';

export default function Tooltip({ content = 'Tooltip Content', children }) {
	const { theme } = useContext(ThemeContext);
	return (
		<Hover>
			{hover => (
				<div className='tool-container'>
					{hover && <div className={`${theme}-tooltip`}>{content}</div>}
					{children}
				</div>
			)}
		</Hover>
	);
}

Tooltip.propTypes = {
	content: PropTypes.string
};

// export default withHover(Tooltip, 'hover');
