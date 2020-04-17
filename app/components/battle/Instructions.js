import React, { useContext } from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

import ThemeContext from '../context/ThemeContext.js';

export default function Instructions() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='instructions-container'>
			<h1 className='center-text header-lg'>Instructions</h1>
			<ol className='container-sm grid center-text battle-instructions'>
				<li>
					<h3 className='header-sm'>Enter two Github users</h3>
					<FaUserFriends className={`bg-${theme}`} color='#ffc107' size={140} />
				</li>
				<li>
					<h3 className='header-sm'>Battle</h3>
					<FaFighterJet className={`bg-${theme}`} color='#757575' size={140} />
				</li>
				<li>
					<h3 className='header-sm'>See the winners</h3>
					<FaTrophy className={`bg-${theme}`} color='#ffeb3b' size={140} />
				</li>
			</ol>
		</div>
	);
}
