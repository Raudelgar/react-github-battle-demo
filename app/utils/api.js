import axios from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '../../.env.js';

const base_host = 'https://api.github.com';
const FETCH_OPTIONS = {
	mode: 'cors',
	headers: {
		Accept: 'application/vnd.github.v3.full+json',
		'Content-Type': 'application/json',
	},
};
const id = CLIENT_ID ? CLIENT_ID : '';
const secrect = CLIENT_SECRET ? CLIENT_SECRET : '';
const params = `?client_id=${id}$client_secret=${secrect}`;

export function fetchPopularRepos(language) {
	const encodeUrl = window.encodeURI(
		`${base_host}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
	);

	return axios.get(encodeUrl, FETCH_OPTIONS).then((res) => {
		if (res.statusText !== 'OK') {
			return new Error(res.status);
		}

		return res.data.items;
	});
}

export function battle(users) {
	return Promise.all([
		getUserData(users[0]),
		getUserData(users[1]),
	]).then((results) =>
		results.sort((playerOne, playerTwo) => playerTwo.score - playerOne.score)
	);
}

function getUserData(username) {
	return Promise.all([getProfile(username), getRepos(username)]).then(
		([profile, repos]) => ({
			profile,
			score: caclulateScore(profile.followers, repos),
		})
	);
}

function caclulateScore(followers, repos) {
	return followers * 3 + getStarCount(repos);
}

function getStarCount(repos) {
	return repos.reduce((acc, curr) => acc + curr.stargazers_count, 0);
}

function getProfile(username) {
	const encodeUrl = window.encodeURI(`${base_host}/users/${username}${params}`);
	return axios.get(encodeUrl, FETCH_OPTIONS).then((res) => {
		if (res.statusText !== 'OK') {
			throw new Error(getErrorMessages(res.status, username));
		}

		return res.data;
	});
}

function getRepos(username) {
	const encodeUrl = window.encodeURI(
		`${base_host}/users/${username}/repos${params}&per_page=100`
	);

	return axios.get(encodeUrl, FETCH_OPTIONS).then((res) => {
		if (res.statusText !== 'OK') {
			throw new Error(getErrorMessages(res.status, username));
		}

		return res.data;
	});
}

function getErrorMessages(messages, username) {
	if (messages === 'Not Found') return `${username} doesn't exist`;

	return messages;
}
