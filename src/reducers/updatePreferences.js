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
	console.log('in updatePreferences reducer');
	switch (action.type) {
	case 'CHANGE_CHECKBOX_VALUE':
		console.log('I made it into the reducer!');

		let outputObject = Object.assign({}, state);
		outputObject.categoryPicker = Object.assign({}, outputObject.categoryPicker, {
			[action.category] : !state.categoryPicker[action.category]
		});
		return outputObject;
	case 'UPDATE_TEXTBOX_VALUE':
		console.log(action);
		let outputObject2 = Object.assign({}, state);
		outputObject2.textBox = Object.assign({},
			outputObject2.textBox, {
				[action.name] : action.input
			}
		);
		console.log(outputObject2);
		return outputObject2;
	default:
		return state;
	}
};

export default updatePreferences;
