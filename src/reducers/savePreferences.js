const savePreferences = (state = {}, action) => {
	switch (action.type) {
	case 'SAVE_PREFERENCES':
		let outputObject = Object.assign({}, state);
		outputObject.preferences = Object.assign({}, action.preferences);
		return outputObject;
	case 'SAVE_PREFERENCES_FROM_LOCAL_STORAGE':
		let outputObject2 =  Object.assign({}, state);
		outputObject2.preferences = Object.assign({}, action.savedInLocalStorage);
		return outputObject2;
	case 'CLEAR_SAVE_PREFERENCES':
		let outputObject3 = Object.assign({}, state);
		outputObject3 = {};
		return outputObject3;
	default:
		return state;
	};
};

export default savePreferences;
