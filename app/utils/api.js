const base_host = 'https://api.github.com';
const id = 'YOUR_CLIENT_ID';
const secrect = 'YOUR_SECRET_ID';
const params = `?client_id=${id}$client_secret=${secrect}`;

export function fetchPopularRepos(language) {
	const encodeUrl = window.encodeURI(
		`${base_host}/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
	);

	return fetch(encodeUrl)
		.then(res => res.json())
		.then(data => {
			if (!data.items) {
				return new Error(data.messages);
			}

			return data.items;
		});
}

export function battle(users) {
	return Promise.all([
		getUserData(users[0]),
		getUserData(users[1])
	]).then(results =>
		results.sort((playerOne, playerTwo) => playerTwo.score - playerOne.score)
	);
}

function getUserData(username) {
	return Promise.all([getProfile(username), getRepos(username)]).then(
		([profile, repos]) => ({
			profile,
			score: caclulateScore(profile.followers, repos)
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
	return fetch(`${base_host}/users/${username}${params}`)
		.then(res => res.json())
		.then(data => {
			if (data.messages) {
				throw new Error(getErrorMessages(data.messages, username));
			}

			return data;
		});
}

function getRepos(username) {
	return fetch(`${base_host}/users/${username}/repos${params}&per_page=100`)
		.then(res => res.json())
		.then(data => {
			if (data.messages) {
				throw new Error(getErrorMessages(data.messages, username));
			}
			return data;
		});
}

function getErrorMessages(messages, username) {
	if (messages === 'Not Found') return `${username} doesn't exist`;

	return messages;
}
