import { combineReducers } from 'redux';
import news from './receiveNews';
import searchComponentFunctionality from './searchComponentFunctionality';
import updatePreferences from './updatePreferences';

export default combineReducers({
	news,
	searchComponentFunctionality,
	updatePreferences
});
