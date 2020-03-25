import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { battle } from '../../utils/api.js';
import Loader from '../loader/Loader.js';
import UserProfile from '../profiles/UserProfile.js';
import Card from '../card/Card.js';

export default class UserResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		};
	}

	componentDidMount() {
		const { users } = this.props;

		battle(users)
			.then(data => {
				this.setState({
					winner: data[0],
					loser: data[1],
					error: null,
					loading: false
				});
			})
			.catch(({ messages }) =>
				this.setState({ error: messages, loading: false })
			);
	}
	render() {
		const { winner, loser, error, loading } = this.state;
		const winnerHeader =
			winner && loser ? (winner.score === loser.score ? 'Tie' : 'Winner') : '';
		const loserHeader =
			winner && loser ? (winner.score === loser.score ? 'Tie' : 'Loser') : '';
		return (
			<React.Fragment>
				{loading && <Loader label='Loading' />}
				{error && <p className='center-text error'>{error}</p>}
				{!error && !loading && (
					<ul className='grid space-around'>
						<li className='repo bg-light'>
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
						<li className='repo bg-light'>
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
				)}
			</React.Fragment>
		);
	}
}

UserResult.propTypes = {
	users: PropTypes.array.isRequired
};
