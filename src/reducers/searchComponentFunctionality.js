const searchComponentFunctionality = (state = {
	searchResults: {},
	searchQueryInput: '',
	mostRecentSearch: ''
}, action) => {
	switch (action.type) {
	case 'UPDATE_QUERY':
		return Object.assign({}, state, {searchQueryInput: action.query});
		break;
	case 'RECEIVE_SEARCH':
		return Object.assign({}, state, {
			searchResults: {
				[action.query]: action.results
			},
			searchQueryInput: '',
			mostRecentSearch: action.query
		});
		break;
	default:
		return state;
	}
};

export default searchComponentFunctionality;
