import React, { Component } from 'react';

import { battle } from '../../utils/api.js';
import Loader from '../loader/Loader.js';
import UserInfo from './UserInfo.js';

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
				console.log(data);
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

		return (
			<React.Fragment>
				{loading && <Loader label='Loading' />}
				{error && <p className='center-text error'>{error}</p>}
				{!error && !loading && (
					<ul className='grid space-around'>
						<li className='repo bg-light'>
							<h3 className='header-lg center-text'>
								{winner.score === loser.score ? 'Tie' : 'Winner'}
							</h3>
							<UserInfo profile={winner.profile} score={winner.score} />
						</li>
						<li className='repo bg-light'>
							<h3 className='header-lg center-text'>
								{winner.score === loser.score ? 'Tie' : 'Loser'}
							</h3>
							<UserInfo profile={loser.profile} score={loser.score} />
						</li>
					</ul>
				)}
			</React.Fragment>
		);
	}
}
