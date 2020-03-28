import React, { Component } from 'react';

import LanguagesNav from './LanguagesNav.js';
import Loader from '../loader/Loader.js';
import ReposGrid from './ReposGrid.js';
import { fetchPopularRepos } from '../../utils/api.js';

export default class Popular extends Component {
	state = {
		selectedLanguage: 'all',
		repos: {},
		error: null
	};
	updateSelectedLanguage = newLang => {
		const { repos } = this.state;
		this.setState({
			selectedLanguage: newLang,
			error: null
		});

		if (!repos[newLang]) {
			fetchPopularRepos(newLang)
				.then(data => {
					this.setState(currState => {
						return {
							repos: { ...currState.repos, [newLang]: data }
						};
					});
				})
				.catch(error => {
					console.log(error);
					this.setState({
						error: 'There was an error fetching the reposotories'
					});
				});
		}
	};

	componentDidMount() {
		this.updateSelectedLanguage(this.state.selectedLanguage);
	}

	isLoading = () => {
		const { repos, error, selectedLanguage } = this.state;
		return !repos[selectedLanguage] && !error;
	};

	render() {
		const { selectedLanguage, repos, error } = this.state;
		return (
			<React.Fragment>
				<LanguagesNav
					selected={selectedLanguage}
					onUpdateLanguage={this.updateSelectedLanguage}
				/>
				{this.isLoading() && <Loader label='Fetching Repos' />}

				{error && <p className='center-text error'>{error}</p>}

				{repos[selectedLanguage] && (
					<ReposGrid repos={repos[selectedLanguage]} />
				)}
			</React.Fragment>
		);
	}
}
