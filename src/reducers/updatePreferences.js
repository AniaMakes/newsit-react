import categories from '../constants/categories';

let categoryPickerInitial = {};

categories.forEach(category => {
	categoryPickerInitial[category] = false;
});



const updatePreferences = (state = {
	categoryPicker: categoryPickerInitial
}, action) => {
	switch (action.type) {
	case 'CHANGE_CHECKBOX_VALUE':
		console.log('I made it into the reducer!');

		let outputObject = Object.assign({}, state);
		outputObject.categoryPicker = Object.assign({}, outputObject.categoryPicker, {
			[action.category] : !state.categoryPicker[action.category]
		});
		return outputObject;
	default:
		return state;
	}
};

export default updatePreferences;
