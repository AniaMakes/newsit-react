export const updateQuery = query => {
  console.log(query);
  return {
    type: 'UPDATE_QUERY',
    query: query
  };
};

export function receiveSearch(articles,query){
  console.log(articles);
  return {
    type: 'RECEIVE_SEARCH',
    results: articles,
    query: query
  };
};

export const fetchSearch = query =>{
  return function(dispatch){
    return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=c28b8dc432854485a62509bd93f210d3`)
    .then(response => response.json())
    .then(results => dispatch(receiveSearch(results.articles, query)));
  };
};

export const searchRequest = query => {
  return(dispatch) => {
    return dispatch(fetchSearch(query));
  };
};
function receiveNews(news) {
  return {
    type: 'RECEIVE_NEWS',
    news
  };
}

function fetchNews() {
  return function(dispatch) {
    return fetch('http://localhost:3000/api/topheadlines')
      .then(response => response.json())
      .then(news => dispatch(receiveNews(news.articles)))
      .catch(error => console.log(error)); // TO DO ADD ERROR MESSAGE HERE
  };
}

export const requestNews = () => dispatch => dispatch(fetchNews());

