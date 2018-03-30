import { combineReducers } from 'redux';
import news from './receiveNews';
import searchComponentFunctionality from './searchComponentFunctionality';

export default combineReducers({
	news,
	searchComponentFunctionality
});
