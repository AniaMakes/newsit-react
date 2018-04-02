const savePreferences = (state = {}, action) => {
	switch (action.type) {
	case 'SAVE_PREFERENCES':
		let outputObject = Object.assign({}, state);
		outputObject.preferences = Object.assign({}, action.preferences);
		return outputObject;
		break;
	default:
		return state;
	};
};

export default savePreferences;
