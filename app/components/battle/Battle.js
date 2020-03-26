import React, { Component } from 'react';

import Instructions from './Instructions.js';
import Players from './Players.js';
import PlayerView from './PlayerView.js';
import UserResult from './UserResult.js';

export default class Battle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOne: null,
			playerTwo: null,
			battleMatch: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResetUser = this.handleResetUser.bind(this);
	}

	handleSubmit(key, username) {
		this.setState({ [key]: username });
	}

	handleResetUser(key) {
		this.setState({ [key]: null });
	}

	render() {
		const { playerOne, playerTwo, battleMatch } = this.state;
		if (battleMatch) {
			return (
				<UserResult
					users={[playerOne, playerTwo]}
					resetBattle={() =>
						this.setState({
							playerOne: null,
							playerTwo: null,
							battleMatch: false
						})
					}
				/>
			);
		}

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
						<button
							className='btn dark-btn btn-space'
							onClick={() => this.setState({ battleMatch: true })}
						>
							Battle
						</button>
					)}
				</div>
			</React.Fragment>
		);
	}
}
