import React from 'react';
import PropTypes from 'prop-types';

// import withHover from '../../utils/withHover.js';
import Hover from '../../utils/Hover.js';

export default function Tooltip({ content = 'Tooltip Content', children }) {
	return (
		<Hover>
			{hover => (
				<div className='tool-container'>
					{hover && <div className='tooltip'>{content}</div>}
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
