import { combineReducers } from 'redux';
import news from './receiveNews';
import searchComponentFunctionality from './searchComponentFunctionality';
import updatePreferences from './updatePreferences';
import savePreferences from './savePreferences';
import receiveInterest from './receiveInterest';

export default combineReducers({
	news,
	searchComponentFunctionality,
	updatePreferences,
	savePreferences,
	receiveInterest
});
