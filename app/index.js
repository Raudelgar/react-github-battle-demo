import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
const LazyBattle = lazy(() => import('./components/battle/Battle.js'));
const LazyUserResult = lazy(() => import('./components/battle/UserResult.js'));
import { ThemeProvider } from './components/context/ThemeContext.js';
import Loader from './components/loader/Loader.js';

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
								<Suspense fallback={<Loader />}>
									<Route exact path='/battle' component={LazyBattle} />
									<Route path='/battle/results' component={LazyUserResult} />
								</Suspense>
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
