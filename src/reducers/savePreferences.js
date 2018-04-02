const savePreferences = (state = {}, action) => {
	console.log(action);
	switch (action.type) {
	case 'SAVE_PREFERENCES':
		console.log('made it into savePreferences action');
		let outputObject = Object.assign({}, state);
		outputObject.preferences = Object.assign({}, action.preferences);
		console.log(outputObject);
		return outputObject;
		break;
	default:
		return state;
	};
};

export default savePreferences;
