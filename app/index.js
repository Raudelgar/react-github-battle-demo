import React, { Component, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Popular from './components/popular/Popular.js';
import NavBar from './components/navbar/NavBar.js';
const LazyBattle = lazy(() => import('./components/battle/Battle.js'));
const LazyUserResult = lazy(() => import('./components/battle/UserResult.js'));
import ThemeContext from './components/context/ThemeContext.js';
import Loader from './components/loader/Loader.js';

import './index.css';

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
	};

	return (
		<Router>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<div className={theme}>
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
			</ThemeContext.Provider>
		</Router>
	);
}

ReactDOM.render(<App />, document.getElementById('app'));
