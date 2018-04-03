import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './components/App';
import AppRouter from './components/AppRouter';

import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { loadState } from './helpers/localStorage';
import { savePreferencesToStateOnReload, restoreCustomisedSettings } from './actions';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const userPreferences = loadState('news preferences');

if(userPreferences){
	console.log('should only be here once prefs have been set');
	console.log(userPreferences);
	store.dispatch(savePreferencesToStateOnReload(userPreferences));
	store.dispatch(restoreCustomisedSettings(userPreferences));
};




ReactDOM.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>,
	document.getElementById('root'),
);
