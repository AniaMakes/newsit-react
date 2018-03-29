import { combineReducers } from 'redux';
import query from './query';
import search from './search';
import news from './receiveNews';

export default combineReducers({
	query,
	news,
	search
});
