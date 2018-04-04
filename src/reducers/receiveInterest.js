const receiveInterest = (state = {
	results: [],
	interest: ''
}, action) => {
	switch (action.type) {
	case 'RECEIVE_INTEREST':
		return Object.assign({}, state, {
			results: action.results,
			interest: action.interest
		});
		break;
	default:
		return state;
	}
};

export default receiveInterest;
