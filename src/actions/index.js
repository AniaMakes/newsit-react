import categories from '../constants/categories';

function receiveNews(news,category) {
	console.log('receive news ', news, category);
	return {
		type: 'RECEIVE_NEWS',
		[category]: news,
		category: category
	};
};

function fetchNews(category) {
	console.log('in fetch news ', category);
	return function(dispatch) {
		return fetch('http://localhost:3000/topheadlines')
			.then(response => response.json())
			.then(news => {
				console.log('in fetch news then ', category);
				return dispatch(receiveNews(news.articles, category));
			})
			.catch(error => console.log(error)); // TO DO ADD ERROR MESSAGE HERE
	};
};

export const requestNews = (category) => {
	console.log('category in requestNews in action index: ', category);
	return(dispatch) => {
		return dispatch(fetchNews(category));
	};
};
