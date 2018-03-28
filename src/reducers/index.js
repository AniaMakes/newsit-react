import { combineReducers } from 'redux';
import query from './query';
import search from './search';

export default combineReducers({
  query,
  search
});
