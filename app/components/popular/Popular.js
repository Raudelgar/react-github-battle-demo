import React, { useReducer, useEffect } from 'react';

import LanguagesNav from './LanguagesNav.js';
import Loader from '../loader/Loader.js';
import ReposGrid from './ReposGrid.js';
import { fetchPopularRepos } from '../../utils/api.js';

function popularReducer(state, action) {
	switch (action.type) {
		case 'cache':
			return {
				...state,
				selectedLanguage: action.payload,
				error: null,
			};
		case 'resolve':
			return {
				...state,
				repos: action.payload,
				error: null,
			};
		case 'reject':
			return {
				...state,
				error: action.payload,
			};
		default:
			return new Error(`The ${action.type} is not supported`);
	}
}

const initialState = {
	selectedLanguage: 'all',
	repos: {},
	error: null,
};

export default function Popular() {
	const [state, dispatch] = useReducer(popularReducer, initialState);

	useEffect(() => {
		updateSelectedLanguage(state.selectedLanguage);
	}, []);

	const updateSelectedLanguage = (newLang) => {
		const { repos } = state;
		dispatch({ type: 'cache', payload: newLang });

		if (!repos[newLang]) {
			fetchPopularRepos(newLang)
				.then((data) => {
					dispatch({
						type: 'resolve',
						payload: { ...state.repos, [newLang]: data },
					});
				})
				.catch((error) => {
					dispatch({
						type: 'reject',
						payload: 'There was an error fetching the reposotories',
					});
				});
		}
	};

	const isLoading = () => {
		const { repos, error, selectedLanguage } = state;
		return !repos[selectedLanguage] && !error;
	};

	const { selectedLanguage, repos, error } = state;
	return (
		<>
			<LanguagesNav
				selected={selectedLanguage}
				onUpdateLanguage={updateSelectedLanguage}
			/>
			{isLoading() && <Loader label='Fetching Repos' />}

			{error && <p className='center-text error'>{error}</p>}

			{repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
		</>
	);
}
