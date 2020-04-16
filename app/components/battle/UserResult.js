import React, { useEffect, useReducer } from 'react';
import queryString from 'query-string';

import { battle } from '../../utils/api.js';
import Loader from '../loader/Loader.js';
import UserProfile from '../profiles/UserProfile.js';
import Card from '../card/Card.js';
import { ThemeConsumer } from '../context/ThemeContext.js';

function userResultReducer(state, action) {
	switch (action.type) {
		case 'resolve':
			return {
				winner: action.payload.winner,
				loser: action.payload.loser,
				error: null,
				loading: false
			};
		case 'reject':
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return new Error();
	}
}

const initalState = {
	winner: null,
	loser: null,
	error: null,
	loading: true
};

export default function UserResult(props) {
	const [state, dispatch] = useReducer(userResultReducer, initalState);

	useEffect(() => {
		runBattle();
	}, []);

	const runBattle = () => {
		const { playerOne, playerTwo } = queryString.parse(props.location.search);

		battle([playerOne, playerTwo])
			.then(data => {
				dispatch({
					type: 'resolve',
					payload: {
						winner: data[0],
						loser: data[1]
					}
				});
			})
			.catch(({ messages }) => dispatch({ type: 'reject', payload: messages }));
	};

	const { winner, loser, error, loading } = state;
	const winnerHeader =
		winner && loser ? (winner.score === loser.score ? 'Tie' : 'Winner') : '';
	const loserHeader =
		winner && loser ? (winner.score === loser.score ? 'Tie' : 'Loser') : '';

	return (
		<ThemeConsumer>
			{({ theme }) => (
				<React.Fragment>
					{loading && <Loader label='Battle' />}
					{error && <p className='center-text error'>{error}</p>}
					{!error && !loading && (
						<React.Fragment>
							<ul className='grid space-around'>
								<li className={`repo bg-${theme}`}>
									<Card
										header={winnerHeader}
										avatar={winner.profile.avatar_url}
										login={winner.profile.login}
										url={winner.profile.html_url}
										score={winner.score}
									>
										<UserProfile profile={winner.profile} />
									</Card>
								</li>
								<li className={`repo bg-${theme}`}>
									<Card
										header={loserHeader}
										avatar={loser.profile.avatar_url}
										login={loser.profile.login}
										url={loser.profile.html_url}
										score={loser.score}
									>
										<UserProfile profile={loser.profile} />
									</Card>
								</li>
							</ul>
							<button
								className={`btn ${
									theme === 'light' ? 'dark-btn' : 'light-btn'
								} btn-space`}
								onClick={() => props.history.goBack()}
							>
								Reset
							</button>
						</React.Fragment>
					)}
				</React.Fragment>
			)}
		</ThemeConsumer>
	);
}
