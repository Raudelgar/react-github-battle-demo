import React, { Component } from 'react';

import Instructions from './Instructions.js';
import Players from './Players.js';
import PlayerView from './PlayerView.js';
import { ThemeConsumer } from '../context/ThemeContext.js';
import { Link } from 'react-router-dom';

export default class Battle extends Component {
	state = {
		playerOne: null,
		playerTwo: null
	};

	handleSubmit = (key, username) => {
		this.setState({ [key]: username });
	};

	handleResetUser = key => {
		this.setState({ [key]: null });
	};

	render() {
		const { playerOne, playerTwo } = this.state;
		return (
			<React.Fragment>
				<Instructions />
				<div className='players-container'>
					<h1 className='center-text header-lg'>Players</h1>
					<div className='row space-around'>
						{!playerOne ? (
							<Players
								label='Player One'
								onSubmit={username => this.handleSubmit('playerOne', username)}
							/>
						) : (
							<PlayerView
								label='Player One'
								username={playerOne}
								onReset={() => this.handleResetUser('playerOne')}
							/>
						)}
						{!playerTwo ? (
							<Players
								label='Player Two'
								onSubmit={username => this.handleSubmit('playerTwo', username)}
							/>
						) : (
							<PlayerView
								label='Player Two'
								username={playerTwo}
								onReset={() => this.handleResetUser('playerTwo')}
							/>
						)}
					</div>
					{playerOne && playerTwo && (
						<ThemeConsumer>
							{({ theme }) => (
								<Link
									to={{
										pathname: 'battle/results',
										search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
									}}
									className={`btn ${
										theme === 'light' ? 'dark-btn' : 'light-btn'
									} btn-space`}
								>
									Battle
								</Link>
							)}
						</ThemeConsumer>
					)}
				</div>
			</React.Fragment>
		);
	}
}
