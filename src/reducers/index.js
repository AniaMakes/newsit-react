import { combineReducers } from 'redux';
import news from './receiveNews';
import searchComponentFunctionality from './searchComponentFunctionality';
import updatePreferences from './updatePreferences';
import savePreferences from './savePreferences';
import error from './receiveError';

export default combineReducers({
	news,
	searchComponentFunctionality,
	updatePreferences,
	savePreferences,
	error
});
