import { combineReducers } from 'redux';
import news from './receiveNews';
import searchComponentFunctionality from './searchComponentFunctionality';
import updatePreferences from './updatePreferences';
import savePreferences from './savePreferences';
import receiveInterest from './receiveInterest';
import receiveCountryNews from './receiveCountryNews';

export default combineReducers({
	news,
	searchComponentFunctionality,
	updatePreferences,
	savePreferences,
	receiveInterest,
	receiveCountryNews
});
