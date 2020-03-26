import React from 'react';
import PropTypes from 'prop-types';

import withHover from '../../utils/withHover.js';

function Tooltip({ content = 'Tooltip Content', children, hover }) {
	return (
		<div className='tool-container'>
			{hover && <div className='tooltip'>{content}</div>}
			{children}
		</div>
	);
}

Tooltip.propTypes = {
	content: PropTypes.string
};

export default withHover(Tooltip, 'hover');
