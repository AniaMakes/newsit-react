import categories from '../constants/categories';

// ============ DEFAULT CATEGORIES BLOCK

export function receiveNews(news,category) {
	return {
		type: 'RECEIVE_NEWS',
		news: news,
		category: category
	};
};

export function receiveError(error, category) {
	return {
		type: 'RECEIVE_ERROR',
		errorText: error,
		category: category
	};
};

function fetchNews(category) {
	return function(dispatch) {
		return fetch(`http://localhost:3000/api/topheadlines/${category}`)
			.then(response => {
				const returnedResponse = response.json();
				return returnedResponse;
			})
			.then(news => {
				if (!news.articles){
					return Promise.reject('No news to display. Try again later');
				}
				return dispatch(receiveNews(news.articles, category));
			})
			.catch(error => {
				return dispatch(receiveError(error, category));
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

export function receiveSearchError(error, query){
	return {
		type: 'RECEIVE_SEARCH_ERROR',
		errorText: error,
		query: query
	};
};

export const fetchSearch = query =>{
	return function(dispatch){
		return fetch(`/api/search/${query}`)
			.then(response => {
				const returnedResponse = response.json();
				return returnedResponse;
			})
			.then(results => {
				if (!results.articles) {
					return Promise.reject('No search results. Try again');
				}
				return dispatch(receiveSearch(results.articles, query));
			})
			.catch(error => dispatch(receiveSearchError(error, query)));
	};
};

export const searchRequest = query => {
	return(dispatch) => {
		return dispatch(fetchSearch(query));
	};
};

// ============= COUNTRY NEWS BLOCK

export function receiveCountryNews(news,country) {
	return {
		type: 'RECEIVE_COUNTRY_NEWS',
		news: news,
		country: country
	};
};

export const fetchCountryNews = country => {
	return function(dispatch){
		return fetch(`api/countryNews/${country}`)
			.then(response => {
				const returnedResponse = response.json();
				return returnedResponse;
			})
			.then(news => {
				if (!news.articles){
					return Promise.reject('No news to display. Try again later');
				}
				return dispatch(receiveCountryNews(news.articles, country));
			})
			.catch(error => {
				return ({error: 'something went wrong'});
			});
	};
};

export const countryNewsRequest = country => {
	return(dispatch) => {
		return dispatch(fetchCountryNews(country));
	};
};



// ============= PREFERENCES BLOCK

export const updateCheckboxValue = (category)=> {
	return{
		type: 'CHANGE_CHECKBOX_VALUE',
		category: category
	};
};


export const updateTextboxValue = (textBoxName, textBoxInput) => {
	return {
		type: 'UPDATE_TEXTBOX_VALUE',
		name: textBoxName,
		input: textBoxInput
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

export const clearUpdatePreferences = () => {
	return {
		type: 'CLEAR_UPDATE_PREFERENCES'
	};
};

export const clearSavePreferences = () => {
	return {
		type: 'CLEAR_SAVE_PREFERENCES'
	};
};

// ================ SEARCH INTEREST

export function getInterest(articles,query){

	return {
		type: 'RECEIVE_INTEREST',
		results: articles,
		interest: query
	};
};

export const fetchInterest = query =>{
	return function(dispatch){
		return fetch(`/api/search/${query}`)
			.then(response => response.json())
			.then(results => dispatch(getInterest(results.articles, query)));
	};
};

export const searchInterest = query => {
	return(dispatch) => {
		return dispatch(fetchInterest(query));
	};
};

export const clearInterests = () => {
	return {
		type: 'CLEAR_INTERESTS'
	};
};
