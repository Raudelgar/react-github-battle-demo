import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
import Battle from './components/battle/Battle.js';
import { ThemeProvider } from './components/context/ThemeContext.js';

import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: 'light',
			toggleTheme: () => {
				this.setState(currState => {
					return {
						theme: currState.theme === 'light' ? 'dark' : 'light'
					};
				});
			}
		};
	}

	render() {
		return (
			<Router>
				<ThemeProvider value={this.state}>
					<div className={this.state.theme}>
						<div className='nav-container'>
							<NavBar />
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
				</ThemeProvider>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
