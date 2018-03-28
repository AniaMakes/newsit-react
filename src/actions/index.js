function receiveNews(news) {
	return {
		type: 'RECEIVE_NEWS',
		news: news
	};
};

function fetchNews() {
	return function(dispatch) {
		return fetch('http://localhost:3000/topheadlines')
			.then(response => response.json())
			.then(news => {
				return dispatch(receiveNews(news.articles));
			})
			.catch(error => console.log(error)); // TO DO ADD ERROR MESSAGE HERE
	};
};

export const requestNews = () => {
	return(dispatch) => {
		return dispatch(fetchNews());
	};
};
