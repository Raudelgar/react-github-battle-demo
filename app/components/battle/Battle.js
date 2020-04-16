import React, { useReducer } from 'react';

import Instructions from './Instructions.js';
import Players from './Players.js';
import PlayerView from './PlayerView.js';
import { ThemeConsumer } from '../context/ThemeContext.js';
import { Link } from 'react-router-dom';

function battleReducer(state, action) {
	switch (action.type) {
		case 'submit':
			return {
				...state,
				[action.key]: action.payload
			};
		case 'reset':
			return {
				...state,
				[action.key]: null
			};
		default:
			return new Error();
	}
}

const initialState = {
	playerOne: null,
	playerTwo: null
};

export default function Battle() {
	const [state, dispatch] = useReducer(battleReducer, initialState);

	const handleSubmit = (key, username) => {
		dispatch({ type: 'submit', key, payload: username });
	};

	const handleResetUser = key => {
		dispatch({ type: 'reset', key });
	};

	const { playerOne, playerTwo } = state;
	return (
		<React.Fragment>
			<Instructions />
			<div className='players-container'>
				<h1 className='center-text header-lg'>Players</h1>
				<div className='row space-around'>
					{!playerOne ? (
						<Players
							label='Player One'
							onSubmit={username => handleSubmit('playerOne', username)}
						/>
					) : (
						<PlayerView
							label='Player One'
							username={playerOne}
							onReset={() => handleResetUser('playerOne')}
						/>
					)}
					{!playerTwo ? (
						<Players
							label='Player Two'
							onSubmit={username => handleSubmit('playerTwo', username)}
						/>
					) : (
						<PlayerView
							label='Player Two'
							username={playerTwo}
							onReset={() => handleResetUser('playerTwo')}
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
