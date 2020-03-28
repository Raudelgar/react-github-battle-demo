import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

import { ThemeConsumer } from '../context/ThemeContext.js';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'Popular'
		};

		this.updateTab = this.updateTab.bind(this);
	}

	updateTab(tab) {
		this.setState({ tab });
	}

	render() {
		const { tab } = this.state;
		const linkStyle = {
			color: 'inherit',
			textDecoration: 'none'
		};
		return (
			<ThemeConsumer>
				{({ theme, toggleTheme }) => (
					<React.Fragment>
						<ul className='nav'>
							<Link to='/' style={linkStyle}>
								<button
									className={`nav btn-clear ${
										tab === 'Popular' ? 'selectedBtn' : ''
									}`}
									onClick={() => this.updateTab('Popular')}
								>
									Popular
								</button>
							</Link>
							<Link to='/battle' style={linkStyle}>
								<button
									className={`nav btn-clear ${
										tab === 'Battle' ? 'selectedBtn' : ''
									}`}
									onClick={() => this.updateTab('Battle')}
								>
									Battle
								</button>
							</Link>
						</ul>
						<button className='nav btn-clear theme' onClick={toggleTheme}>
							{theme === 'light' ? (
								<FaToggleOff color='#414344' size={35} />
							) : (
								<FaToggleOn color='#dedee0' size={35} />
							)}
						</button>
					</React.Fragment>
				)}
			</ThemeConsumer>
		);
	}
}
