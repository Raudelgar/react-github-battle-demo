import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
import Battle from './components/battle/Battle.js';

import './index.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='nav-container'>
					<NavBar />
					<button className='nav btn-clear theme'>Theme</button>
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
			</Router>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
