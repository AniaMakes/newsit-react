import categories from '../constants/categories';

export const categoriesForRender = (view, properties) => {
	let preferredCategories = [];
	if (view === 'personalised') {
		Object.keys(properties.savedPreferences.categoryPicker).forEach(key => {
			if(properties.savedPreferences.categoryPicker[key]){
				preferredCategories.push(key);
			}
		});
	} else {
		preferredCategories = categories;
	}
	return preferredCategories;
};
