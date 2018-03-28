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
