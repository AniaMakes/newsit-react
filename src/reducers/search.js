const search =(state={}, action) => {
	switch (action.type) {
	case 'RECEIVE_SEARCH':
		return Object.assign({}, state,{
			[action.query]: action.results
		});
	default:
		return state;
	}
};

export default search;
