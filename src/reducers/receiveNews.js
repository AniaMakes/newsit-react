// import CATEGORIES from '../constants/categories';

// const {categories} = CATEGORIES;

// const news = (state = { // TODO CREATE AN OBJ USING REDUCE
// 	category: [{
// 		title: '',
// 		url: '',
// 		description: '',
// 		urlToImage: ''
// 	}],
// }, action) => {

// }

const news = (
  state = {
    generalNews: [],
  },
  action,
) => {
  switch (action.type) {
    case 'RECEIVE_NEWS':
      return Object.assign({}, state, {
        generalNews: action.news,
      });
    default:
      return state;
  }
};

export default news;
