const searchComponentFunctionality = (state = {
	searchResults: {},
	searchQueryInput: '',
	mostRecentSearch: ''
}, action) => {
	switch (action.type) {
	case 'UPDATE_QUERY':
		return Object.assign({}, state, {searchQueryInput: action.query});
	case 'RECEIVE_SEARCH':
		return Object.assign({}, state, {
			searchResults: {
				[action.query]: action.results
			},
			searchQueryInput: '',
			mostRecentSearch: action.query
		});
	case 'RECEIVE_SEARCH_ERROR':
		return Object.assign({}, state, {
			searchResults: {
				[action.query]: action.errorText
			},
			searchQueryInput: '',
			mostRecentSearch: action.query
		});
	default:
		return state;
	}
};

export default searchComponentFunctionality;
