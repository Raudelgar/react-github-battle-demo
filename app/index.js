import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
import Battle from './components/battle/Battle.js';
import UserResult from './components/battle/UserResult.js';
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
						<div className='container'>
							<NavBar />
							<Switch>
								<Route exact path='/' component={Popular} />
								<Route exact path='/battle' component={Battle} />
								<Route path='/battle/results' component={UserResult} />
								<Route
									render={() => (
										<div className='header-lg center-text'>
											<h2>404 - Page Not Found</h2>
										</div>
									)}
								/>
							</Switch>
						</div>
					</div>
				</ThemeProvider>
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
