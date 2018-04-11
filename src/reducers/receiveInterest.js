const receiveInterest = (state = {}, action) => {
	switch (action.type) {
	case 'RECEIVE_INTEREST':
		return Object.assign({}, state, {
			[action.interest]: action.results
		});
	case 'CLEAR_INTERESTS':
		let outputObject = Object.assign({}, state);
		outputObject = {};
		return outputObject;
	default:
		return state;
	}
};

export default receiveInterest;
