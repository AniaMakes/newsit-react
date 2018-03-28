import categories from '../constants/categories';

const initialState = {};
categories.forEach(category => {
	initialState[category] = [];
});

const news = (state = initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_NEWS':
			console.log('action in receiveNews receiver: ', action);
			return Object.assign({}, state, {
				[action.category]: action.news
				// category: category
				// currentCategory: action.category
			});
		default:
			return state;
	};
};

export default news;