import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
import Battle from './components/battle/Battle.js';
import { ThemeContext } from './components/theme/ThemeContext.js';

import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'bg-light',
			apptheme: '',
			light: true
		};
		this.updateTheme = this.updateTheme.bind(this);
	}

	updateTheme() {
		if (this.state.light) {
			this.setState({ theme: 'bg-dark', apptheme: 'dark-theme', light: false });
		} else {
			this.setState({ theme: 'bg-light', apptheme: '', light: true });
		}
	}

	render() {
		const { light, theme, apptheme } = this.state;
		return (
			<Router>
				<ThemeContext.Provider value={theme}>
					<div className={apptheme}>
						<div className='nav-container'>
							<NavBar />
							<button
								className='nav btn-clear theme'
								onClick={this.updateTheme}
							>
								{light ? (
									<FaToggleOff color='#1679ce' size={35} />
								) : (
									<FaToggleOn color='#dedee0' size={35} />
								)}
							</button>
						</div>
						<Switch>
							<Route
								exact
								path='/'
								render={() => (
									<div className='container'>
										<Popular />
									</div>
								)}
							/>
							<Route
								path='/battle'
								render={() => (
									<div className='container'>
										<Battle />
									</div>
								)}
							/>
						</Switch>
					</div>
				</ThemeContext.Provider>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
