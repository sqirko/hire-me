const queryParams = params => (
	Object.keys(params)
		.map(key => key + '=' + params[key])
		.join('&')
);

export default queryParams;