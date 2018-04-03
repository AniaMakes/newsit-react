const error = (state = [], action) => {
	switch(action.type) {
	case 'RECEIVE_ERROR': 
		return state.concat([action.error]);
	default:
		return state;
	};
};

export default error;


