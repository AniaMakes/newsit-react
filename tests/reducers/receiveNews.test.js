import receiveNews from '../../src/reducers/receiveNews';

describe('receiveNews receiver', () => {
	it('should return the initial state', () => {
		expect(receiveNews(undefined, {type: 'REMOVE_BUGS'})).toEqual({
			'general': [],
			'business' : [],
			'entertainment': [],
			 	'health' : [],
			'science': [],
			'sports': [],
			'technology': []
		},
		);
	});

	it('should handle RECEIVE_NEWS', () => {
		const preState = {
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : [],
			'science': [],
			'sports': [],
			'technology': []
		};

		const incomingAction = {
			type: 'RECEIVE_NEWS',
			category: 'science',
			news: ['news1', 'news2', 'news3']
		};

		const desiredOutput = {
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : [],
			'science': ['news1', 'news2', 'news3'],
			'sports': [],
			'technology': []
		};

		expect(receiveNews(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : [],
			'science': [],
			'sports': [],
			'technology': []
		});
	});

	it('should handle RECEIVE_ERROR', () => {
		const preState = {
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : [],
			'science': ['news1', 'news2', 'news3'],
			'sports': [],
			'technology': []
		};

		const incomingAction = {
			type: 'RECEIVE_ERROR',
			errorText: 'This is an error. Sad times',
			category: 'health'
		};

		const desiredOutput = {
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : {
				errorText: 'This is an error. Sad times'
			},
			'science': ['news1', 'news2', 'news3'],
			'sports': [],
			'technology': []
		};

		expect(receiveNews(preState, incomingAction)).toEqual(desiredOutput);
		expect(preState).toEqual({
			'general': [],
			'business' : [],
			'entertainment': [],
			'health' : [],
			'science': ['news1', 'news2', 'news3'],
			'sports': [],
			'technology': []
		});
	});
});
