import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../context/ThemeContext.js';

export default class Players extends Component {
	state = {
		username: ''
	};

	static propTypes = {
		label: PropTypes.string.isRequired,
		onSubmit: PropTypes.func.isRequired
	};

	handleUsernameInput = e => {
		const value = e.target.value;
		this.setState({ username: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.username);
		this.setState({ username: '' });
	};

	render() {
		return (
			<ThemeConsumer>
				{({ theme }) => (
					<form className='column player' onSubmit={this.handleSubmit}>
						<label htmlFor='username' className='player-label'>
							{this.props.label}
						</label>
						<div className='row player-inputs'>
							<input
								type='text'
								id='username'
								className={`input-${theme}`}
								value={this.state.username}
								placeholder='github username'
								autoComplete='off'
								onChange={this.handleUsernameInput}
							/>
							<button
								type='submit'
								className={`btn ${
									theme === 'light' ? 'dark-btn' : 'light-btn'
								}`}
								disabled={!this.state.username}
							>
								Submit
							</button>
						</div>
					</form>
				)}
			</ThemeConsumer>
		);
	}
}
