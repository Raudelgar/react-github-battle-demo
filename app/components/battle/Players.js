import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../theme/ThemeContext.js';

export default class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUsernameInput = this.handleUsernameInput.bind(this);
	}

	handleUsernameInput(e) {
		const value = e.target.value;
		this.setState({ username: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state.username);
		this.setState({ username: '' });
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{theme => {
					const bgInput = theme === 'bg-light' ? 'input-light' : 'input-dark';
					return (
						<form className='column player' onSubmit={this.handleSubmit}>
							<label htmlFor='username' className='player-label'>
								{this.props.label}
							</label>
							<div className='row player-inputs'>
								<input
									type='text'
									id='username'
									className={bgInput}
									value={this.state.username}
									placeholder='github username'
									autoComplete='off'
									onChange={this.handleUsernameInput}
								/>
								<button
									type='submit'
									className='btn dark-btn'
									disabled={!this.state.username}
								>
									Submit
								</button>
							</div>
						</form>
					);
				}}
			</ThemeContext.Consumer>
		);
	}
}

Players.propTypes = {
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
};
