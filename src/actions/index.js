import categories from '../constants/categories';

// ============ DEFAULT CATEGORIES BLOCK

function receiveNews(news,category) {
	return {
		type: 'RECEIVE_NEWS',
		news: news,
		category: category
	};
};

function fetchNews(category) {
	return function(dispatch) {
		return fetch(`http://localhost:3000/api/topheadlines/${category}`)
			.then(response => response.json())
			.then(news => {
				return dispatch(receiveNews(news.articles, category));
			})
			.catch(error => console.log(error)); // TO DO ADD ERROR MESSAGE HERE
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
    return fetch(`http://localhost:3000/api/search/${query}`)
    .then(response => response.json())
    .then(results => dispatch(receiveSearch(results.articles, query)));
  };
};

export const searchRequest = query => {
  return(dispatch) => {
    return dispatch(fetchSearch(query));
  };
};
