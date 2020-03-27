import React from 'react';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';

import { ThemeContext } from '../theme/ThemeContext.js';

export default function Instructions(props) {
	return (
		<ThemeContext.Consumer>
			{theme => (
				<div className='instructions-container'>
					<h1 className='center-text header-lg'>Instructions</h1>
					<ol className='container-sm grid center-text battle-instructions'>
						<li>
							<h3 className='header-sm'>Enter two Github users</h3>
							<FaUserFriends className={theme} color='#ffc107' size={140} />
						</li>
						<li>
							<h3 className='header-sm'>Battle</h3>
							<FaFighterJet className={theme} color='#757575' size={140} />
						</li>
						<li>
							<h3 className='header-sm'>See the winners</h3>
							<FaTrophy className={theme} color='#ffeb3b' size={140} />
						</li>
					</ol>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
