const axios = require('axios');

export const getDemo = params => {
	const URL = 'https://reactjsteachingproj.herokuapp.com/users';

	return axios.get(URL).then(response => {
		return response.data;
	});
};

export const apiCall = (url, data, headers, method) =>
	axios({
		method,
		url,
		data,
		headers
	});
