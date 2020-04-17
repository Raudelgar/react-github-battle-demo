import React, { useState } from 'react';

export default function Hover(props) {
	const [hovering, setHovering] = useState(false);
	const [styles, setStyles] = useState(null);

	const handleMouseOver = (e) => {
		// console.log('X', e.clientX);
		// console.log('Y', e.clientY);
		setHovering(true);
		setStyles({
			left: `${10}px`,
			top: `${-25}px`,
		});
	};

	const handleMouseOut = () => {
		setHovering(false);
		setStyles(null);
	};

	const { children } = props;

	return (
		<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
			{children(hovering, styles)}
		</div>
	);
}
