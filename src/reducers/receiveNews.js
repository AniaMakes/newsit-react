import categories from '../constants/categories';

const initialState = {};
categories.forEach(category => {
	initialState[category] = [];
});

const news = (state = initialState, action) => {
	switch(action.type) {
	case 'RECEIVE_NEWS':
		return Object.assign({}, state, {
			[action.category]: action.news
		});
		break;
	case 'RECEIVE_ERROR':
		return Object.assign({}, state, {
			[action.category]: {errorText: action.errorText}
		});
		break;
	default:
		return state;
	};
};

export default news;
