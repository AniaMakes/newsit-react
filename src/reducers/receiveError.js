const error = (state, action) => {
	switch(action.type) {
	case 'RECEIVE_ERROR': 
		console.log(state);
		return Object.assign({}, state, {
			action: action.error
		});
	default:
		return state;
	};
};

export default error;


