const receiveInterest = (state = {}, action) => {
	switch (action.type) {
	case 'RECEIVE_INTEREST':
		return Object.assign({}, state, {
			[action.interest]: action.results
		});
		break;
	case 'CLEAR_INTERESTS':
		let outputObject = Object.assign({}, state);
		outputObject = {};
		return outputObject;
		break;
	default:
		return state;
	}
};

export default receiveInterest;
