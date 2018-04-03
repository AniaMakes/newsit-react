import categories from '../constants/categories';

// ============ DEFAULT CATEGORIES BLOCK

export function receiveNews(news,category) {
	return {
		type: 'RECEIVE_NEWS',
		news: news,
		category: category
	};
};

export function receiveError(error) {
	console.log('I received an error ' + error);
	return {
		type: 'RECEIVE_ERROR',
		error
	};
};

function fetchNews(category) {
	return function(dispatch) {
		return fetch(`http://localhost:3000/api/topheadlines/${category}`)
			.then(response => {
				const returnedResponse = response.json();
				console.log(returnedResponse);
				return returnedResponse;
			})
			.then(news => {
				return dispatch(receiveNews(news.articles, category));
			})
			.catch(error => {
				console.log(error);
				return dispatch(receiveError(error));
			});
	};
};

export const requestNews = (category) => {
	return(dispatch) => {
		return dispatch(fetchNews(category));
	};
};

// ============= SEARCH BLOCK

export const updateQuery = query => {
	return {
		type: 'UPDATE_QUERY',
		query: query
	};
};

export function receiveSearch(articles,query){
	return {
		type: 'RECEIVE_SEARCH',
		results: articles,
		query: query
	};
};

export const fetchSearch = query =>{
	return function(dispatch){
		return fetch(`/api/search/${query}`)
			.then(response => response.json())
			.then(results => dispatch(receiveSearch(results.articles, query)))
			.catch(error => dispatch(receiveError(results)));
	};
};

export const searchRequest = query => {
	return(dispatch) => {
		return dispatch(fetchSearch(query));
	};
};

export const updateCheckboxValue = (category)=> {
	return{
		type: 'CHANGE_CHECKBOX_VALUE',
		category: category
	};
};

export const savePreferencesToLocalStorage = (preferencesObject) => {
	let preferencesJSON = JSON.stringify(preferencesObject);
	localStorage.setItem('news preferences', preferencesJSON);
	return {
		type: 'SAVE_PREFERENCES',
		preferences: preferencesObject
	};
};

export const updateTextboxValue = (textBoxName, textBoxInput) => {
	return {
		type: 'UPDATE_TEXTBOX_VALUE',
		name: textBoxName,
		input: textBoxInput
	};
};

export const savePreferencesToStateOnReload = (savedInLocalStorage) => {
	return {
		type: 'SAVE_PREFERENCES_FROM_LOCAL_STORAGE',
		savedInLocalStorage
	};
};

export const restoreCustomisedSettings = (savedInLocalStorage) => {
	return {
		type: 'RESTORE_CUSTOMISED_SETTINGS',
		savedInLocalStorage
	};
};
