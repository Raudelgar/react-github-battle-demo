import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// import withHover from '../../utils/withHover.js';
// import Hover from '../../utils/Hover.js';
import useHover from '../../utils/useHover.js';
import ThemeContext from '../context/ThemeContext';

export default function Tooltip({ content = 'Tooltip Content', children }) {
	const { theme } = useContext(ThemeContext);
	const [hovering, attr] = useHover();

	return (
		<div className='tool-container' {...attr}>
			{hovering && <div className={`${theme}-tooltip`}>{content}</div>}
			{children}
		</div>
	);
}

Tooltip.propTypes = {
	content: PropTypes.string,
};

// export default withHover(Tooltip, 'hover');
