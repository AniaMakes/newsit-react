import categories from '../constants/categories';

let categoryPickerInitial = {};

categories.forEach(category => {
	categoryPickerInitial[category] = false;
});

const updatePreferences = (state = {
	categoryPicker: categoryPickerInitial,
	textBox: {
		'Interests' : '',
		'Ignore': ''
	}
}, action) => {
	switch (action.type) {
	case 'CHANGE_CHECKBOX_VALUE':

		let outputObject = Object.assign({}, state);
		outputObject.categoryPicker = Object.assign({}, outputObject.categoryPicker, {
			[action.category] : !state.categoryPicker[action.category]
		});
		return outputObject;
		break;
	case 'UPDATE_TEXTBOX_VALUE':
		let outputObject2 = Object.assign({}, state);
		outputObject2.textBox = Object.assign({},
			outputObject2.textBox, {
				[action.name] : action.input
			}
		);
		return outputObject2;
		break;
	case 'RESTORE_CUSTOMISED_SETTINGS':
		let outputObject3 =  Object.assign({}, state);
		outputObject3.categoryPicker = Object.assign({}, action.savedInLocalStorage.preferencesObject.categoryPicker);
		outputObject3.textBox = Object.assign({}, action.savedInLocalStorage.preferencesObject.textBox);
		return outputObject3;
		break;
	case 'CLEAR_UPDATE_PREFERENCES':
		let outputObject4 = Object.assign({}, state);
		outputObject4.categoryPicker = Object.assign({}, categoryPickerInitial);
		outputObject4.textBox = Object.assign({}, 
			{
				'Interests' : '',
				'Ignore': ''
			});
		return outputObject4;
		break;
	default:
		return state;
	}
};

export default updatePreferences;
